import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuTop } from "./components/MenuTop/MenuTop";
import { Pagination } from "antd";

import { Home } from "./Pages/home";
import { URL_API, API } from "./helpers/API";
import { useFetch } from "./hooks/useFetch";

import { TopRatedTV } from "./Pages/topRatedTV";
import { PopularTV } from "./Pages/populartv";
import { UpcomingMovie } from "./Pages/upcomingMovie";

import "./MovieApp.scss";
function MovieApp() {
  const { Header, Content } = Layout;
  const [pageTopRated, setPageTopRated] = useState(1); //contador de paginas

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

  const [pagination, setpagination] = useState(1);

  const onChange = (e) => {
    setPageTopRated(e); //pagina actual
  };

  //carga las paginas totlaes del home que seria el top_rated
  useEffect(() => {
    setpagination(total_pages_topRates); //totoal de apginas
  }, [total_pages_topRates]);

  console.log("totla:", total_pages_topRates);

  return (
    <Layout>
      <Router>
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

        <Content>
          <Route path="/" exact={true}>
            <Home
              pageTopRated={pageTopRated}
              setPageTopRated={setPageTopRated}
            />
          </Route>
          <Switch>
            <Route path="/upcomingMovie" exact={true}>
              <UpcomingMovie pagination={pageTopRated} />
            </Route>

            <Route path="/topRatedTV" exact={true}>
              <TopRatedTV pagination={pageTopRated} />
            </Route>

            <Route path="/popularTV" exact={true}>
              <PopularTV pagination={pageTopRated} />
            </Route>
            <Route path="" exact={true}></Route>

            <Route path="" exact={true}></Route>

            <Route path="*"></Route>
          </Switch>
        </Content>
        <Pagination
          className="pagination"
          onChange={onChange}
          defaultCurrent={1}
          total={pagination}
          current={pageTopRated}
          defaultPageSize={pagination}
        />
      </Router>
    </Layout>
  );
}

export default MovieApp;
