import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useSelector} from 'react-redux'
import Layout from "../components/Layout/Layout";
import Login from "../pages/login";

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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return isAuthenticated ? (
    <Route {...props} component={Layout} />
  ) : (
    <Route {...props} component={Login} />
  );
};

export default App;
