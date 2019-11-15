import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/data/DataPage.module.scss";

import { bind } from "decko";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import classNames from "classnames";

export default @inject("store") @observer class DataPage extends Component {
  render() {
    return (
      <main className={classNames(CommonCss.page, Css.dataPage)}>
        <button className={CommonCss.button} onClick={this.handleAddButtonClick}>Add new (async)</button>
        {this.renderTable()}
      </main>
    );
  }

  renderTable() {
    return (
      <table>
        <tbody>
          {this.props.store.data.map(({ name, login }) => {
            const fullName = `${name.title}. ${name.first} ${name.last}`;
            return (
              <tr key={login.uuid}>
                <td>{fullName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    if (!this.props.store.data.length) this.props.store.addItem();
  }

  @bind
  handleAddButtonClick() {
    this.props.store
      .addItem()
      .then(({ name }) => {
        console.log(`${name.title}. ${name.first} ${name.last}`);//eslint-disable-line no-console
      });
  }
}
