import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuTop } from "./components/MenuTop/MenuTop";
import { Pagination } from "antd";

import { Home } from "./Pages/home";
import { Upcoming } from "./Pages/upcoming";
import { URL_API, API } from "./helpers/API";
import { useFetch2 } from "./hooks/useFetch2";

import "./MovieApp.scss";
function MovieApp() {
  const { Header, Content } = Layout;
  const [pagination, setPagination] = useState(1);
  const [pageTopRated, setPageTopRated] = useState(1);

  const url = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`;
  useFetch2(url, setPagination);

  const onChange = (e) => {
    console.log(e);
    setPageTopRated(e);
  };

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Route path="/" exact={true}>
            <Home pageTopRated={pageTopRated} />
          </Route>
          <Switch>
            <Route path="/upcoming" exact={true}>
              <Upcoming />
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
        />
      </Router>
    </Layout>
  );
}

export default MovieApp;
