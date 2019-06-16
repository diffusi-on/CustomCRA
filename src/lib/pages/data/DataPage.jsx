import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/data/DataPage.module.scss";

import { memoize } from "decko";
import Config from "const/Config";
import React, { Component } from "react";
import Utils from "utils/Utils";

export default class DataPage extends Component {
  render() {
    return (
      <main className={Utils.makeClassName(CommonCss.page, Css.dataPage)}>
        {this.renderTable(Config.TABLE_ROWS_QUANTITY)}
      </main>
    );
  }

  @memoize
  renderTable(length) {
    let key = 0;
    return (
      <table>
        <tbody>
          {new Array(length).fill().map((value, index) => {
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
}
