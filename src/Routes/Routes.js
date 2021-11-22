import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";
import NavBarMenu from '../components/NavBarMenu'
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import Details from "../components/Details";
import About from "../components/About";

const Routes = (props) => {
  // @ts-ignore
  const isAuth = useSelector((store) => store.searchList.isAuth);
  console.log(isAuth);
  return (
    <Router>
      <NavBarMenu />
      <Switch>
        <Route exact path="/about" component={About} />
        <ProtectedRoutes
          exact
          path="/details"
          component={Details}
          isAuth={true}
        />
        <ProtectedRoutes exact path="/home" isAuth={isAuth} component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
