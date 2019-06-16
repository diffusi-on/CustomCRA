import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/main/MainPage.module.scss";

import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import RoutesConfig from "const/RoutesConfig";
import Utils from "utils/Utils";

export default class MainPage extends Component {
  render() {
    return (
      <main className={Utils.makeClassName(CommonCss.page, Css.mainPage)}>
        <p>Edit <code>src/App.jsx</code> and save to reload.</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <hr />
        <div><NavLink to={RoutesConfig.AUTH.PATH}>Auth page</NavLink></div>
        <div><NavLink to={RoutesConfig.DATA.PATH}>Data page</NavLink></div>
      </main>
    );
  }
}
