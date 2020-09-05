import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../LoginScreen/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={DashboardRouter} />
      </Switch>
    </Router>
  );
};
