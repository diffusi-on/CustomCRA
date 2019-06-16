//Компонент форм, управляемый через стейт
import { bind } from "decko";
import React, { Component } from "react";
import Utils from "utils/Utils";

export default class Form extends Component {
  static childContextTypes = {
    form: () => null
  };

  constructor(props) {
    super(props);
    if (this.props.initialValues === undefined) {
      throw new Error("Prop initialValues is required for every Form component");
    }
    this.state = {
      formState: this.props.initialValues,
      formErrors: this.props.validate ? this.validateForm(this.props.initialValues, this.props.validate) : null
    };
    this.formApi = {
      setValues: this.setValues,
      resetForm: this.resetForm
    };
    this.UNSAFE_componentWillReceiveProps = this.componentWillReceiveProp;
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children(this.state)}
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

  componentWillReceiveProp(nextProps) {
    if (!Utils.checkShallowEquality(this.props.initialValues, nextProps.initialValues)) {
      this.setValues(nextProps.initialValues);
    }
  }

  @bind
  handleChange({ currentTarget }) {
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
        if (this.props.validate && this.state.formErrors) {
          currentTarget.setCustomValidity(this.state.formErrors[currentTarget.name] || "");
        } else currentTarget.setCustomValidity("");
        if (this.props.onChange) this.props.onChange({
          formState: this.state.formState,
          formErrors: this.state.formErrors,
          formApi: this.formApi,
          form: currentTarget
        });
      }
    );
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
