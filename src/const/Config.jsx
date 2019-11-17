//Основной файл конфигурации приложения
/* eslint-disable no-magic-numbers */
export default class Config {
  static DATA_API_URL = "https://randomuser.me/api/";

  static AUTH_LS_KEY = "authData";

  static INPUT_FIELDS_RESTRICTIONS = {
    LOGIN: { minLength: 6, maxLength: 20, pattern: /^[a-zA-Z0-9-_]+$/ },
    PASSWORD: { minLength: 6, maxLength: 20, pattern: /^[a-zA-Z0-9-_]+$/ }
  };

  static ACCESS_TYPES = {
    NORMAL: "normal",
    AUTH: "auth",
    GUEST: "guest"
  };

  static CLIENT_TYPES = {
    DESKTOP: "desktop",
    MOBILE: "mobile"
  };
}
