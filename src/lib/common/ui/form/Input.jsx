import FormElement from "lib/common/ui/form/FormElement";
import React from "react";

export default class Input extends FormElement {
  render() {
    const { form: { formState, onChange } } = this.context;
    return <input {...this.props} value={formState[this.props.name]} onChange={onChange} />;
  }
}
