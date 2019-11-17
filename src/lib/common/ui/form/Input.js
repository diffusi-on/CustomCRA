//Компонент input
import FormElement from "lib/common/ui/form/FormElement";
import React from "react";

export default class Input extends FormElement {
  render() {
    const { form: { formState, onChange } } = this.context;
    const { innerRef, ...restProps } = this.props;
    return <input {...restProps} value={formState[this.props.name]} ref={innerRef} onChange={onChange} />;
  }
}
