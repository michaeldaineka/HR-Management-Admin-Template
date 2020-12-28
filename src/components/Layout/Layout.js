import React from "react";
import { useHistory, useLocation, Link, Switch, Route } from "react-router-dom";
import s from "./Layout.module.less";
import Sidebar from "components/Sidebar";
import layoutSchema, { routes } from "./layoutSchema";

export default () => {
  const location = useLocation();
  console.log(routes)
  return (
    <>
      {routes.includes(location.pathname) ? <Sidebar /> : null}
      <main className={s.content}>
        <Switch>
          {layoutSchema.map((item) => (
            <Route {...item} key={item.path} />
          ))}
          )}
        </Switch>
      </main>
    </>
  );
};
