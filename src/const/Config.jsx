//Основной файл конфигурации приложения
/* eslint-disable no-magic-numbers */
export default class Config {
  static REQUEST_DELAY = 300;

  static TABLE_ROWS_QUANTITY = 3;

  static INPUT_FIELDS_RESTRICTIONS = {
    LOGIN: { minLength: 6, maxLength: 20, pattern: /^[a-zA-Z0-9-_]+$/ },
    PASSWORD: { minLength: 6, maxLength: 20, pattern: /^[a-zA-Z0-9-_]+$/ }
  };

  static ACCESS_TYPES = {
    NORMAL: "normal",
    AUTH: "auth",
    GUEST: "guest"
  };
}
