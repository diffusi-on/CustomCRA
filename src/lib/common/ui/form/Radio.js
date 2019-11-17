//Компонент radio
import React, { Component } from "react";

export default class Radio extends Component {
  static contextTypes = {
    radioGroup: () => null
  };

  constructor(props, context) {
    super(props, context);
    if (this.props.name !== undefined) {
      throw new Error("Don't use 'name' prop directly on Radio component, instead set 'name' prop of parent RadioGroup");
    }
    if (!context.radioGroup) {
      throw new Error(
        "Radio components required to be a child of RadioGroup component"
      );
    }
    if (this.props.type !== undefined) {
      throw new Error(`Don't use 'type' prop on Radio component of radiogroup named "${context.radioGroup.name}"`);
    }
    if (this.props.defaultValue !== undefined) {
      throw new Error(
        `Use 'value' prop instead of 'defaultValue' for Radio component of radiogroup named "${context.radioGroup.name}"`
      );
    }
    if (this.props.value === undefined) {
      throw new Error(`Prop 'value' is required for every Radio component of radiogroup named "${context.radioGroup.name}"`);
    }
    if (this.props.defaultChecked !== undefined) {
      throw new Error(
        "Don't use 'checked' or 'defaultChecked' props directly on Radio component of radiogroup "
        + `named "${context.radioGroup.name}", 'initialValues' prop of parent form, must be used instead`
      );
    }
  }

  render() {
    const { radioGroup: { name, value, onChange } } = this.context;
    const { innerRef, ...restProps } = this.props;
    return (
      <input
        {...restProps}
        name={name}
        type="radio"
        value={this.props.value}
        checked={value === this.props.value}
        ref={innerRef}
        onChange={onChange} />
    );
  }
}
