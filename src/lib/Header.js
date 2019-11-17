import Css from "lib/Header.module.scss";

import logo from "assets/logo.svg";

import { bind } from "decko";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";

export default @inject("store") @observer class Header extends Component {
  render() {
    const { user } = this.props.store;
    return (
      <header className={Css.header} onClick={this.props.onClick}>
        <img src={logo} className={Css.logo} alt="logo" />
        {user && <h3>
          <span>You loged in as: {user.login.toUpperCase()} </span>
          <span className={Css.logout} onClick={this.handleLogoutTextClick}>logout</span>
        </h3>}
      </header>
    );
  }

  @bind
  handleLogoutTextClick() {
    this.props.store.logoutUser();
  }
}
