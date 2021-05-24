import React, { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import Page404 from '../components/pages/Page404';
import HeaderLayout from '../components/templates/HeaderLayout';

const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                  {/* 囲むことでlogin以外はheaderが表示される */}
               <HeaderLayout>{route.children}</HeaderLayout> 
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;
