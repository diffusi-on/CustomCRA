import Css from "lib/App.module.scss";

import * as History from "history";
import * as MobX from "mobx";
import { Provider } from "mobx-react";
import { bind } from "decko";
import Header from "lib/Header";
import MainStore from "stores/MainStore";
import React, { Component } from "react";
import Routes from "lib/Routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = new MainStore();
    this.history = History.createBrowserHistory();
    MobX.configure({ enforceActions: "always" });
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className={Css.app}>
          <Header onClick={this.handleHeaderClick} />
          <Routes history={this.history} />
        </div>
      </Provider>
    );
  }

  @bind
  handleHeaderClick() {
    this.history.push("/");
  }
}
