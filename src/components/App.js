import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/login";

const isAuthenticated = localStorage.getItem("isAuthenticated");

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path={"/login"} exact component={Login} />
        <PrivateRoute path={"/"} component={Layout} />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ ...props }) => {
  return (
    <>{isAuthenticated ? <Route {...props} /> : <Redirect to={"/login"} />}</>
  );
};

const PublicRoute = ({ ...props }) => {
  return (
      <>{isAuthenticated ? <Redirect to={"/"} /> : <Route {...props} />}</>
  );
};

export default App;
