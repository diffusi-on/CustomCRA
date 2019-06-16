import FormElement from "lib/common/ui/form/FormElement";
import React from "react";

export default class Select extends FormElement {
  render() {
    const { form: { formState, onChange } } = this.context;
    return (
      <select {...this.props} value={formState[this.props.name]} onChange={onChange}>
        {this.props.children}
      </select>
    );
  }
}
