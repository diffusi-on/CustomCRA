import Css from "lib/Header.module.scss";

import logo from "assets/logo.svg";

import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className={Css.header} onClick={this.props.onClick}>
        <img src={logo} className={Css.logo} alt="logo" />
      </header>
    );
  }
}
