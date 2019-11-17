import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { inject, observer } from "mobx-react";
import AuthPage from "lib/pages/auth/AuthPage";
import DataPage from "lib/pages/data/DataPage";
import MainPage from "lib/pages/main/MainPage";
import ProtectedRoute from "./common/router/ProtectedRoute";
import React, { Component } from "react";
import RoutesConfig from "const/RoutesConfig";
import StaticPage from "./pages/static/StaticPage";

export default @inject("store") @observer class Routes extends Component {
  render() {
    const authState = !!this.props.store.user;
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/static" component={StaticPage} />
          <ProtectedRoute path="/auth" redirectTo={RoutesConfig.DATA.path} authState={authState} component={AuthPage} />
          <ProtectedRoute path="/data" redirectTo={RoutesConfig.AUTH.path} authState={authState} component={DataPage} />
        </Switch>
      </Router>
    );
  }
}
