//Конфигурация роутов приложения
import Config from "const/Config";

export default class RoutesConfig {
  static MAIN = { PATH: "/", ACCESS: Config.ACCESS_TYPES.NORMAL };

  static DATA = { PATH: "/data", ACCESS: Config.ACCESS_TYPES.AUTH };

  static AUTH = { PATH: "/auth", ACCESS: Config.ACCESS_TYPES.GUEST };
}
