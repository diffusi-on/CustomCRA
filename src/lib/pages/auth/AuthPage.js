import CommonCss from "lib/common/Common.module.scss";

import Css from "lib/pages/auth/AuthPage.module.scss";

import * as Router from "react-router";
import { bind } from "decko";
import { inject } from "mobx-react";
import Form from "lib/common/ui/form/Form";
import FormValidations from "validations/FormValidations";
import Input from "lib/common/ui/form/Input";
import React, { Component, Fragment } from "react";
import RoutesConfig from "const/RoutesConfig";
import classNames from "classnames";

@inject("store")
class AuthPage extends Component {
  render() {
    return (
      <main className={classNames(CommonCss.page, Css.authPage)}>
        <div>
          <button className={CommonCss.button} onClick={this.handleBackButtonClick}>To Main page</button>
        </div>
        <Form
          initialValues={{ login: "", password: "" }}
          validate={this.validateAuthForm}
          onSubmit={this.handleAuthFormSubmit}>
          {({ formApi }) => {
            return (
              <Fragment>
                <div><Input name="login" type="text" placeholder="Login" /></div>
                <div><Input name="password" type="password" placeholder="Password" /></div>
                <button className={CommonCss.button} disabled={!formApi.checkFormFilled()}>Login</button>
              </Fragment>
            );
          }}
        </Form>
      </main>
    );
  }

  @bind
  validateAuthForm(formState) {
    const { login, password } = formState;
    return {
      login: FormValidations.checkLogin(login),
      password: FormValidations.checkPassword(password)
    };
  }

  @bind
  handleAuthFormSubmit({ formState }) {
    this.props.store.authUser(formState.login);
  }

  @bind
  handleBackButtonClick() {
    this.props.history.push(RoutesConfig.MAIN.path);
  }
}

export default Router.withRouter(AuthPage);
