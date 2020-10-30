import React from "react";
import {
  useHistory,
  useLocation,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { Button } from "antd";

export default () => {
  return (
    <>
      <Switch>
        <Route path={"/"} exact render={() => <h1>Main page</h1>} />
        <Route
          path={"/dashboard"}
          exact
          render={() => <h1>Dashboard page</h1>}
        />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </>
  );
};
