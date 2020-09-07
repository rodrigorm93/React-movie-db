import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { URL_API, API } from "./helpers/API";
import { useFetch } from "./hooks/useFetch";
import { UserContext } from "./components/UserContext";
import { AppRouter } from "./components/routers/AppRouter";
import { Pagination } from "antd";

import "./MovieApp.scss";
function MovieApp() {
  const { Content, Footer } = Layout;
  const [pageTopRated, setPageTopRated] = useState(1); //contador de paginas, nos indica en que pagina vamos en la paginacion

  const url = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`;

  const { data } = useFetch(url);
  const { total_pages: total_pages_topRates } = !!data && data;

  const [pagination, setpagination] = useState(1);

  //carga las paginas totlaes del home que seria el top_rated
  useEffect(() => {
    setpagination(total_pages_topRates); //totoal de apginas
  }, [total_pages_topRates]);
  const onChange = (e) => {
    setPageTopRated(e); //pagina actual
  };

  return (
    <>
      <Layout>
        <Content>
          <UserContext.Provider
            value={{
              pageTopRated,
              setPageTopRated,
              setpagination,
            }}
          >
            <AppRouter />
          </UserContext.Provider>
        </Content>
      </Layout>
      <Footer>
        <Pagination
          onChange={onChange}
          defaultCurrent={1}
          total={pagination}
          current={pageTopRated}
          defaultPageSize={pagination}
          className="footer"
        />
      </Footer>
    </>
  );
}

export default MovieApp;
