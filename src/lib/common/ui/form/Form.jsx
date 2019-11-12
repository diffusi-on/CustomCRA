//Компонент форм, управляемый через стейт
import { bind } from "decko";
import Async from "utils/Async";
import React, { Component } from "react";
import Utils from "utils/Utils";

export default class Form extends Component {
  static childContextTypes = {
    form: () => null
  };

  constructor(props) {
    super(props);
    this.formComponent = React.createRef();
    if (this.props.initialValues === undefined) {
      throw new Error("Prop 'initialValues' is required for every Form component");
    }
    this.state = {
      formState: this.props.initialValues,
      formErrors: this.props.validate ? this.validateForm(this.props.initialValues, this.props.validate) : null
    };
    this.formApi = {
      setValues: this.setValues,
      resetForm: this.resetForm,
      checkFormFilled: this.checkFormFilled
    };
  }

  getChildContext() {
    return {
      form: {
        initialValues: this.props.initialValues,
        formState: this.state.formState,
        onChange: this.handleChange
      }
    };
  }

  @bind
  setValues(values) {
    this.setState((prevState) => {
      return { formState: { ...prevState.formState, ...values } };
    });
  }

  @bind
  setComponentRef(element) {
    this.formComponent.current = element;
    if (this.props.innerRef) this.props.innerRef.current = element;
  }

  render() {
    return (
      <form ref={this.setComponentRef} onSubmit={this.handleSubmit}>
        {this.props.children({ ...this.state, formApi: this.formApi })}
      </form>
    );
  }

  @bind
  resetForm(toInitialState = false) {
    if (toInitialState) {
      this.setState({ formState: this.props.initialValues });
    } else {
      const newState = {};
      Object.keys(this.state.formState).forEach((prop) => {
        newState[prop] = "";
      });
      this.setState({ formState: newState });
    }
  }

  @bind
  checkFormFilled() {
    return Object.keys(this.state.formState).every((key) => !!this.state.formState[key]);
  }

  validateForm(formState, validateFunction) {
    const validateResult = validateFunction(formState);
    let formErrors = null;
    Object.entries(validateResult).forEach(([key, value]) => {
      if (value) {
        if (!formErrors) formErrors = {};
        formErrors[key] = value;
      }
    });
    return formErrors;
  }

  updateFormState(currentTarget) {
    return new Promise((resolve) => {
      this.setState(
        (prevState) => {
          const newState = {
            formState: { ...prevState.formState, [currentTarget.name]: currentTarget.value }
          };
          if (this.props.validate) {
            newState.formErrors = this.validateForm(newState.formState, this.props.validate);
          }
          return newState;
        },
        () => {
          const errorMessage = this.state.formErrors ? this.state.formErrors[currentTarget.name] : null;
          if (currentTarget.setCustomValidity) {
            if (currentTarget.value.length && this.props.validate && errorMessage) {
              currentTarget.setCustomValidity(errorMessage);
            } else currentTarget.setCustomValidity("");
          }
          resolve();
        }
      );
    });
  }

  componentDidMount() {
    const { current: formComponent } = this.formComponent;
    const { formState } = this.state;
    (async() => {
      await Async.runInSequence(
        Object.entries(formState)
          .map(([key, value]) => {
            const currentTarget = formComponent[key];
            if (value && currentTarget && currentTarget.name) return () => this.updateFormState(currentTarget);
            return null;
          })
          .filter((value) => !!value)
      );
    })();
  }

  componentDidUpdate(prevProps) {
    if (!Utils.checkShallowEquality(prevProps.initialValues, this.props.initialValues)) {
      this.setValues(this.props.initialValues);
    }
  }

  @bind
  handleChange({ currentTarget }) {
    this.updateFormState(currentTarget)
      .then(() => {
        if (this.props.onChange) this.props.onChange({
          formState: this.state.formState,
          formErrors: this.state.formErrors,
          formApi: this.formApi,
          form: currentTarget
        });
      });
  }

  @bind
  handleSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit({
      formState: this.state.formState,
      formApi: this.formApi,
      form: event.currentTarget
    });
  }
}
