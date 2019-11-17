import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/static/StaticPage.module.scss";

import * as Router from "react-router";
import { bind } from "decko";
import React, { Component } from "react";
import RoutesConfig from "const/RoutesConfig";
import classNames from "classnames";

class StaticPage extends Component {
  render() {
    return (
      <main className={classNames(CommonCss.page, Css.staticPage)}>
        <div>
          <button className={CommonCss.button} onClick={this.handleBackButtonClick}>To Main page</button>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </div>
      </main>
    );
  }

  @bind
  handleBackButtonClick() {
    this.props.history.push(RoutesConfig.MAIN.path);
  }
}

export default Router.withRouter(StaticPage);
