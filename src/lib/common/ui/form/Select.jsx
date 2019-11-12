//Компонент select
import FormElement from "lib/common/ui/form/FormElement";
import React from "react";

export default class Select extends FormElement {
  render() {
    const { form: { formState, onChange } } = this.context;
    const { innerRef, ...restProps } = this.props;
    return (
      <select {...restProps} value={formState[this.props.name]} ref={innerRef} onChange={onChange}>
        {this.props.children}
      </select>
    );
  }
}
