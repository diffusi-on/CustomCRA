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
          {this.props.store.data.map((value, index) => {
            return (
              <tr key={`key${++key}`}>
                <td>{index}</td>
                <td>{Math.random()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    new Array(Config.TABLE_ROWS_QUANTITY).fill().forEach(() => {
      this.props.store.addItem(Math.random());
    });
  }

  @bind
  handleAddButtonClick() {
    this.props.store
      .addItem(Math.random(), Config.REQUEST_DELAY)
      .then((item) => {
        console.log("New item added %s", item); //eslint-disable-line no-console
      });
  }
}
