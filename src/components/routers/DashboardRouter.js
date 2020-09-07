import React, { useContext } from "react";
import { Layout } from "antd";

import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../../Pages/home";
import { UpcomingMovie } from "../../Pages/upcomingMovie";
import { TopRatedTV } from "../../Pages/topRatedTV";
import { PopularTV } from "../../Pages/populartv";
import { PopularMovie } from "../../Pages/PopularMovie";
import { MenuTop } from "../MenuTop/MenuTop";
import { UserContext } from "../UserContext";
import { URL_API, API } from "../../helpers/API";
import { useFetch } from "../../hooks/useFetch";
import { DetailMovieTV } from "../DetailMovieTV/DetailMovieTV";
import { Search } from "../Search/Search";

export const DashboardRouter = () => {
  const { Header } = Layout;

  const { setPageTopRated, setpagination } = useContext(UserContext); //le asigamos nuestro componente usercontext para buscar todo lo que tenga adentro

  const url = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`;
  const { data } = useFetch(url);
  const { total_pages: total_pages_topRates } = !!data && data;

  const urlUpcoming = `${URL_API}/movie/upcoming?api_key=${API}&language=es-ES&page=1`;
  const { data: dataUpcoming } = useFetch(urlUpcoming);
  const { total_pages: total_pages_upcoming } = !!dataUpcoming && dataUpcoming;

  const urlTopRatedTV = `${URL_API}/tv/top_rated?api_key=${API}&language=es-ES&page=1`;
  const { data: dataTopRatedTV } = useFetch(urlTopRatedTV);
  const { total_pages: total_pages_top_tv } =
    !!dataTopRatedTV && dataTopRatedTV;

  const urlPopularTV = `${URL_API}/tv/popular?api_key=${API}&language=es-ES&page=1`;
  const { data: dataPopularTV } = useFetch(urlPopularTV);
  const { total_pages: total_popular_tv } = !!dataPopularTV && dataPopularTV;

  return (
    <>
      <Header style={{ zIndex: 1 }}>
        <MenuTop
          setPageTopRated={setPageTopRated}
          setpagination={setpagination}
          total_pages_topRates={total_pages_topRates}
          total_pages_upcoming={total_pages_upcoming}
          total_pages_top_tv={total_pages_top_tv}
          total_popular_tv={total_popular_tv}
        />
      </Header>

      <div>
        <Switch>
          <Route exact path="/home">
            <Home category={true} />
          </Route>

          <Route exact path="/movieTv/:movieTvId" component={DetailMovieTV} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/upcomingMovie">
            <UpcomingMovie category={true} />
          </Route>

          <Route exact path="/topRatedTV">
            <TopRatedTV category={false} />
          </Route>

          <Route exact path="/PopularMovie">
            <PopularMovie category={true} />
          </Route>

          <Route exact path="/popularTV">
            <PopularTV />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
