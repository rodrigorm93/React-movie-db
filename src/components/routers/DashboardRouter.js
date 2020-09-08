import React from "react";
import { Layout } from "antd";

import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../../Pages/home";
import { UpcomingMovie } from "../../Pages/upcomingMovie";
import { TopRatedTV } from "../../Pages/topRatedTV";
import { PopularTV } from "../../Pages/populartv";
import { PopularMovie } from "../../Pages/PopularMovie";
import { MenuTop } from "../MenuTop/MenuTop";
import { DetailMovieTV } from "../DetailMovieTV/DetailMovieTV";
import { Search } from "../Search/Search";

export const DashboardRouter = () => {
  const { Header } = Layout;

  return (
    <>
      <Header style={{ zIndex: 1 }}>
        <MenuTop />
      </Header>

      <div>
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/movieTv/:movieTvId" component={DetailMovieTV} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/upcomingMovie" component={UpcomingMovie} />

          <Route exact path="/topRatedTV" component={TopRatedTV} />

          <Route exact path="/PopularMovie" component={PopularMovie} />

          <Route exact path="/popularTV" component={PopularTV} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
