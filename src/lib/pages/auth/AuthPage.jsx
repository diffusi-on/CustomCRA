import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/auth/AuthPage.module.scss";

import * as Router from "react-router";
import { bind } from "decko";
import Config from "const/Config";
import Form from "lib/common/ui/form/Form";
import Input from "lib/common/ui/form/Input";
import React, { Component, Fragment } from "react";
import RoutesConfig from "const/RoutesConfig";
import Utils from "utils/Utils";

class AuthPage extends Component {
  render() {
    return (
      <main className={Utils.makeClassName(CommonCss.page, Css.authPage)}>
        <div>
          <button onClick={this.handleBackButtonClick}>To Main page</button>
        </div>
        <Form
          initialValues={{ login: "", password: "" }}
          validate={this.validateAuthForm}
          onSubmit={this.handleAuthFormSubmit}>
          {({ formState }) => {
            return (
              <Fragment>
                <div><Input name="login" type="text" required placeholder="Login" /></div>
                <div><Input name="password" type="password" required placeholder="Password" /></div>
                <button disabled={!formState.login || !formState.password}>Login</button>
              </Fragment>
            );
          }}
        </Form>
      </main>
    );
  }

  @bind
  validateAuthForm(formState) {
    const { MIN_LENGTH, MAX_LENGTH, PATTERN } = Config.CREDENTIALS_RESTRICTIONS;
    const { login, password } = formState;
    const patternRegExp = new RegExp(`^${PATTERN}+$`);
    return {
      login: login.length >= MIN_LENGTH && login.length <= MAX_LENGTH && login.match(patternRegExp)
        ? null
        : "Incorrect login",
      password: password.length >= MIN_LENGTH && password.length <= MAX_LENGTH && password.match(patternRegExp)
        ? null
        : "Incorrect password"
    };
  }

  @bind
  handleAuthFormSubmit() {
    this.props.history.push(RoutesConfig.DATA.PATH);
  }

  @bind
  handleBackButtonClick() {
    this.props.history.push(RoutesConfig.MAIN.PATH);
  }
}

export default Router.withRouter(AuthPage);
