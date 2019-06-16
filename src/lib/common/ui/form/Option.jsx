import React, { PureComponent } from "react";

export default class Option extends PureComponent {
  constructor(props) {
    super(props);
    if (this.props.defaultValue !== undefined) {
      throw new Error("Use value prop instead of defaultValue for every Option component");
    }
    if (this.props.value === undefined) {
      throw new Error("Prop value is required for every Option component");
    }
  }

  render() {
    return <option {...this.props} />;
  }
}
