//Защищённый роут, который рендерит контент при соответствии прав доступа или делает редирект куда указано
import { Redirect, Route } from "react-router-dom";
import Config from "const/Config";
import React, { PureComponent } from "react";
import RoutesConfig from "const/RoutesConfig";

export default class ProtectedRoute extends PureComponent {
  static routesConfig = Object.values(RoutesConfig);

  render() {
    const { path, redirectTo, authState, ...restProps } = this.props;
    const routeConf = ProtectedRoute.routesConfig.find((routeConfig) => routeConfig.path === path);
    const redirRouteConf = ProtectedRoute.routesConfig.find((routeConfig) => {
      if (routeConfig.path === RoutesConfig.MAIN.path) return routeConfig.path === redirectTo;
      return redirectTo.indexOf(routeConfig.path) === 0;
    });
    return (
      (routeConf.access === Config.ACCESS_TYPES.GUEST && !authState)
      || (routeConf.access === Config.ACCESS_TYPES.AUTH && authState)
        ? <Route path={path} {...restProps} />
        : <Redirect to={{ pathname: (routeConf.access === redirRouteConf.access ? RoutesConfig.MAIN.path : redirectTo) }} />
    );
  }
}
