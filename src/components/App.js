import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import Login from "../pages/login";

function App() {
  return (
    <Router>
      <CustomRoute path={"/"} />
    </Router>
  );
}

const CustomRoute = ({ ...props }) => {
  const isAuthenticated =
    useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? (
    <Switch>
      <Route {...props} component={Layout} />
    </Switch>
  ) : (
    <Switch>
      <Route path={"/"} exact component={Login} />
      <Route render={() => <h3>error login</h3>} />
    </Switch>
  );
};

export default App;
