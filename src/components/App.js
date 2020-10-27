import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/login/login";

const isAuthenticated = localStorage.getItem("isAuthenticated");

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}

const CustomRoute = ({ component: Component, ...props }) => {
  return (
    <>
      {isAuthenticated ? <Component {...props} /> : <Redirect to={"/login"} />}
    </>
  );
};

export default App;
