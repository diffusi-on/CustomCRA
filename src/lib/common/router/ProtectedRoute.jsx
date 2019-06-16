//Защищенный роутов, который рендерит контент при соответствии прав доступа или делает редирект куда указано
import { Redirect, Route } from "react-router-dom";
import Config from "const/Config";
import React, { PureComponent } from "react";
import RoutesConfig from "const/RoutesConfig";

export default class ProtectedRoute extends PureComponent {
  static ROUTES_CONFIG = Object.values(RoutesConfig);

  render() {
    const { path, redirectTo, authState, ...restProps } = this.props;
    const routeConf = ProtectedRoute.ROUTES_CONFIG.find((routeConfig) => routeConfig.PATH === path);
    const redirRouteConf = ProtectedRoute.ROUTES_CONFIG.find((routeConfig) => routeConfig.PATH === redirectTo);
    return (
      (routeConf.ACCESS === Config.ACCESS_TYPES.GUEST && !authState)
      || (routeConf.ACCESS === Config.ACCESS_TYPES.AUTH && authState)
        ? <Route path={path} {...restProps} />
        : <Redirect to={{ pathname: (routeConf.ACCESS === redirRouteConf.ACCESS ? RoutesConfig.MAIN : redirRouteConf).PATH }} />
    );
  }
}
