import React, { useState, useEffect, useReducer } from "react";
import { Layout } from "antd";
import { URL_API, API } from "./helpers/API";
import { useFetch } from "./hooks/useFetch";
import { AppRouter } from "./components/routers/AppRouter";
import { Pagination } from "antd";

import "./MovieApp.scss";
import { authReducer } from "./components/Auth/authReducer";
import { AuthContext } from "./components/Auth/AuthContext";

const init = () => {
  //ver si esta el usuario, retonara el usuari sino existe retornara el logged en false

  return JSON.parse(localStorage.getItem("user")) || { logged: false }; //si hay un usuario guardado lo retornara
};

function MovieApp() {
  const [user, dispatch] = useReducer(authReducer, {}, init); //el reducer regresara un user

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

  //Usuario
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const onChange = (e) => {
    setPageTopRated(e); //pagina actual
  };

  return (
    <>
      <Layout>
        <Content>
          <AuthContext.Provider
            value={{
              pageTopRated,
              setPageTopRated,
              setpagination,
              user,
              dispatch,
            }}
          >
            <AppRouter />
          </AuthContext.Provider>
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
