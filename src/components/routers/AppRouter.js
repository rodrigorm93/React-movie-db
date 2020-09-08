import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../LoginScreen/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { AddPelicula } from "../AddPelicula/AddPelicula";
import { PrivateRoute } from "./PrivateRouter";
import { AuthContext } from "../Auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticate={user.logged}
          />
          <PrivateRoute
            exact
            path="/addPelicula"
            component={AddPelicula}
            isAuthenticate={user.logged}
          />

          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};
