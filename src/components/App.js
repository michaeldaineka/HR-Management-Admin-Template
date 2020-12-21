import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "components/Layout/Layout";
import Auth from "pages/auth";
import Error from "pages/error";

function App() {
  return (
    <Router>
      <CustomRoute path={"/"} />
    </Router>
  );
}

const CustomRoute = ({ ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Switch>
      <Route {...props} component={Layout} />
    </Switch>
  ) : (
    <Switch>
      <Route {...props} exact component={Auth} />
      <Route component={Error} />
    </Switch>
  );
};

export default App;
