import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/data/DataPage.module.scss";

import { bind } from "decko";
import { inject, observer } from "mobx-react";
import Config from "const/Config";
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
    let key = 0;
    return (
      <table>
        <tbody>
          {this.props.store.data.map(({ name }, index) => {
            return (
              <tr key={`key${++key}`}>
                <td>{`${name.title}. ${name.first} ${name.last}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    this.props.store.addUser();
  }

  @bind
  handleAddButtonClick() {
    this.props.store
      .addUser()
      .then(({ name }) => {
        console.log(`${name.title}. ${name.first} ${name.last}`);//eslint-disable-line no-console
      });
  }
}
