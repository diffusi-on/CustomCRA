import Config from "const/Config";

export default class FormValidations {
  static checkLogin(login) {
    const { LOGIN } = Config.INPUT_FIELDS_RESTRICTIONS;
    return login.length >= LOGIN.minLength && login.length <= LOGIN.maxLength && login.match(LOGIN.pattern)
      ? null : "Incorrect login";
  }

  static checkPassword(password) {
    const { PASSWORD } = Config.INPUT_FIELDS_RESTRICTIONS;
    return password.length >= PASSWORD.minLength && password.length <= PASSWORD.maxLength && password.match(PASSWORD.pattern)
      ? null : "Incorrect password";
  }
}
