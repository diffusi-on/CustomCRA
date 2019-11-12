import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/main/MainPage.module.scss";

import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import RoutesConfig from "const/RoutesConfig";
import classNames from "classnames";

export default class MainPage extends Component {
  render() {
    return (
      <main className={classNames(CommonCss.page, Css.mainPage)}>
        <p>Edit <code>src/App.jsx</code> and save to reload.</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <hr />
        <div><NavLink to={RoutesConfig.AUTH.path}>Auth page</NavLink></div>
        <div><NavLink to={RoutesConfig.DATA.path}>Data page</NavLink></div>
      </main>
    );
  }
}
