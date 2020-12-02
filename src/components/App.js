import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/login";

const isAuthenticated = localStorage.getItem("isAuthenticated");

function App() {
  return (
    <Router>
      <Switch>
        <CustomRoute path={"/"} />
      </Switch>
    </Router>
  );
}

const CustomRoute = ({ ...props }) => {
  return isAuthenticated ? (
    <Route {...props} component={Layout} />
  ) : (
    <Route {...props} component={Login} />
  );
};

export default App;
