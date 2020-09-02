import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuTop } from "./components/MenuTop/MenuTop";
import { Pagination } from "antd";

import { Home } from "./Pages/home";
import { Upcoming } from "./Pages/upcoming";
import { URL_API, API } from "./helpers/API";
import { useFetch } from "./hooks/useFetch";

import "./MovieApp.scss";
function MovieApp() {
  const { Header, Content } = Layout;
  const [pageTopRated, setPageTopRated] = useState(1);

  const url = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`;
  const { data } = useFetch(url);
  const { total_pages } = !!data && data;

  const [pagination, setpagination] = useState(1);

  const onChange = (e) => {
    setPageTopRated(e);
  };

  useEffect(() => {
    setpagination(total_pages);
  }, [total_pages]);

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop setPageTopRated={setPageTopRated} />
        </Header>

        <Content>
          <Route path="/" exact={true}>
            <Home
              pageTopRated={pageTopRated}
              setPageTopRated={setPageTopRated}
            />
          </Route>
          <Switch>
            <Route path="/upcoming" exact={true}>
              <Upcoming pagination={pageTopRated} />
            </Route>

            <Route path="" exact={true}></Route>

            <Route path="" exact={true}></Route>

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
        />
      </Router>
    </Layout>
  );
}

export default MovieApp;
