import Css from "lib/App.module.scss";

import * as History from "history";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { bind } from "decko";
import AuthPage from "lib/pages/auth/AuthPage";
import DataPage from "lib/pages/data/DataPage";
import Header from "lib/Header";
import MainPage from "lib/pages/main/MainPage";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.history = History.createBrowserHistory();
  }

  render() {
    return (
      <div className={Css.app}>
        <Header onClick={this.handleHeaderClick} />
        <Router history={this.history}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/data" component={DataPage} />
          </Switch>
        </Router>
      </div>
    );
  }

  @bind
  handleHeaderClick() {
    this.history.push("/");
  }
}
