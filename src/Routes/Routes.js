import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";
// import Search from "../components/Search";
import NavBarMenu from '../components/NavBarMenu'
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../components/Login";
// import About from "../components/About";
import { useSelector } from "react-redux";
import Details from "../components/Details";

const Routes = (props) => {
  // @ts-ignore
  const isAuth = useSelector((store) => store.searchList.isAuth);
  console.log(isAuth);
  return (
    <Router>
      <NavBarMenu />

      <Switch>
        <Route exact path="/about" component={Home} />
        <ProtectedRoutes
          exact
          path="/details"
          component={Details}
          isAuth={true}
        />
        {/* <ProtectedRoutes
          exact
          path="/search"
          component={Search}
          isAuth={true}
        /> */}
        <ProtectedRoutes exact path="/home" isAuth={isAuth} component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
