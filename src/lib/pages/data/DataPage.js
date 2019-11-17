import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/data/DataPage.module.scss";

import { bind } from "decko";
import { inject, observer } from "mobx-react";
import DataRow from "lib/pages/data/lib/DataRow";
import React, { Component } from "react";
import classNames from "classnames";

export default @inject("store") @observer class DataPage extends Component {
  render() {
    return (
      <main className={classNames(CommonCss.page, Css.dataPage)}>
        <button
          className={CommonCss.button}
          disabled={this.props.store.dataFetching}
          onClick={this.handleAddButtonClick}>
            Add new (async)
        </button>
        <div className={Css.counter}>Items count: {this.props.store.data.length}</div>
        {this.renderTable()}
      </main>
    );
  }

  renderTable() {
    return (
      <table>
        <tbody>
          {this.props.store.data.map((item) => {
            return <DataRow key={item.login.uuid} item={item} onRemove={this.handleDataRowRemove} />;
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

  @bind
  handleDataRowRemove(uuid) {
    this.props.store.removeItem(uuid);
  }
}
