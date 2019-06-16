import FormElement from "lib/common/ui/form/FormElement";
import React from "react";

export default class RadioGroup extends FormElement {
  static childContextTypes = {
    radioGroup: () => null
  };

  getChildContext() {
    const { form: { formState, onChange } } = this.context;
    return {
      radioGroup: { name: this.props.name, value: formState[this.props.name], onChange }
    };
  }

  render() {
    return (
      <div role="radiogroup" {...this.props}>{this.props.children}</div>
    );
  }
}
