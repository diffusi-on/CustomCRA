//Конфигурация роутов приложения
import Config from "const/Config";

export default class RoutesConfig {
  static MAIN = { path: "/", access: Config.ACCESS_TYPES.NORMAL };
  
  static STATIC = { path: "/static", access: Config.ACCESS_TYPES.NORMAL };

  static DATA = { path: "/data", access: Config.ACCESS_TYPES.AUTH };

  static AUTH = { path: "/auth", access: Config.ACCESS_TYPES.GUEST };
}
