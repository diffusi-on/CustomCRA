import Css from "lib/pages/data/lib/DataRow.module.scss";

import { bind } from "decko";
import React, { Component } from "react";

export default class DataRow extends Component {
  render() {
    const { name } = this.props.item;
    const fullName = `${name.title}. ${name.first} ${name.last}`;
    return (
      <tr className={Css.dataRow}>
        <td onClick={this.handleClick}>{fullName}</td>
      </tr>
    );
  }

  @bind
  handleClick() {
    const { item: { login: { uuid } }, onRemove } = this.props;
    if (onRemove) onRemove(uuid);
  }
}
