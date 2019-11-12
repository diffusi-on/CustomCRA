//Родительский класс для дочерних компонентов форм
import { Component } from "react";

export default class FormElement extends Component {
  static contextTypes = {
    form: () => null
  };

  constructor(props, context) {
    super(props, context);
    if (this.props.name === undefined) {
      throw new Error("Prop 'name' is required for every FormElement component");
    }
    if (this.props.value !== undefined || this.props.defaultValue !== undefined) {
      throw new Error(
        `Don't use 'value' or 'defaultValue' props directly on FormElement component named "${this.props.name}", `
        + "'initialValues' prop of parent form must be used instead"
      );
    }
    if (this.props.onChange !== undefined) {
      throw new Error(
        `Don't use 'onChange' prop directly on FormElement component named "${this.props.name}", `
        + "use form state reference in form's child render function or use form's 'onChange' prop"
      );
    }
    if (!context.form) {
      throw new Error(`FormElement component named "${this.props.name}" required to be a child of Form component`);
    }
    if (context.form.initialValues[this.props.name] === undefined) {
      throw new Error(`Set value of field "${this.props.name}" in 'initialValue' prop of Form component`);
    }
  }
}
