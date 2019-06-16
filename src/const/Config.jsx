//Основной файл конфигурации приложения
/* eslint-disable no-magic-numbers */
export default class Config {
  static REQUEST_DELAY = 300;

  static TABLE_ROWS_QUANTITY = 999;

  static CREDENTIALS_RESTRICTIONS = {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
    PATTERN: "[a-zA-Zа-яА-Я0-9_-]"
  };

  static ACCESS_TYPES = {
    NORMAL: "normal",
    AUTH: "auth",
    GUEST: "guest"
  };
}
