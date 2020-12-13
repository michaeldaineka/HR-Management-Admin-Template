import React from "react";
import { useHistory, useLocation, Link, Switch, Route } from "react-router-dom";
import Error from 'pages/error'

export default () => {
  return (
    <Switch>
      <Route path={"/"} exact render={() => <h1>Main page</h1>} />
      <Route path={"/dashboard"} exact render={() => <h1>Dashboard page</h1>} />
      <Route component={Error} />
    </Switch>
  );
};
