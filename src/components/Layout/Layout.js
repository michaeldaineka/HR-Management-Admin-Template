import React from "react";
import { useHistory, useLocation, Link, Switch, Route } from "react-router-dom";
import s from "./Layout.module.less";
import Sidebar from "components/Sidebar";
import layoutSchema, { layoutRoutes } from "./layoutSchema";

export default () => {
  const location = useLocation();
  return (
    <div className={s.layout}>
      {layoutRoutes.includes(location.pathname) ? <Sidebar /> : null}
      <main className={s.content}>
        <Switch>
          {layoutSchema.map((item) => (
            <Route {...item} key={item.path} />
          ))}
          )}
        </Switch>
      </main>
    </div>
  );
};
