import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import s from "./Layout.module.less";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import layoutSchema, { layoutRoutes } from "./layoutSchema";

const Layout = () => {
  const location = useLocation();
  return (
    <div className={s.layout}>
      {layoutRoutes.includes(location.pathname) ? <Sidebar /> : null}
      <main className={s.content}>
        {layoutRoutes.includes(location.pathname) ? <Header /> : null}
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

export default Layout;
