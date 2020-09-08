import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Input } from "antd";
import queryString from "query-string";
//import { useLocation } from "react-router-dom";
import { URL_API, API } from "../../helpers/API";
import { ListMovieTV } from "../ListMovieTV/ListMovieTV";
import { useForm } from "../../hooks/useForm";

import { Button } from "react-bootstrap";

import "./Search.scss";
import { AuthContext } from "../Auth/AuthContext";
//import { useFetch } from "../../hooks/useFetch";

export const Search = (props) => {
  const { location, history } = props;
  const { setpagination } = useContext(AuthContext); //sacmaos la pagina en la que vamos en la navegacion

  //const location = useLocation(); // para obenter la url de busqueda
  const [movieList, setMovieList] = useState([]);

  const [envio, setenvio] = useState(false);

  const { q = "" } = queryString.parse(location.search); //separamos la q de la palbara escrita, si es vacio igualamos el q a un string vacio

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q, // se lo establecmeos al valor inicial del formulario
  });

  const [keyVideo, setKeyVideo] = useState("55");

  const { searchText } = formValues;

  const url_video = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;

  //const url = `${URL_API}/search/movie/?api_key=${API}&language=es-Es&query=${searchText}&page=1`;
  //const { data } = useFetch(url);
  //const { results } = !!data && data;

  //realizamos al busqueda cada vez que enviemos el formulario:
  useEffect(() => {
    (async () => {
      const { q = "" } = queryString.parse(location.search); //separamos la q de la palbara escrita, si es vacio igualamos el q a un string vacio

      //const searchValue = queryString.parseUrl(location.search); //devuelve {url: "", query: {…}} y dentro en s esta el nombre de la peli
      // const { s } = searchValue.query; //s tiene el nombre de la pelicula que escriba
      //vamos hacer la peticion http

      //const url = `${URL_API}/search/movie/?api_key=${API}&language=es-Es&query=${searchText}&page=1`;
      //const { data } = useFetch(url);
      //const { results } = !!data && data;
      const response = await fetch(
        `${URL_API}/search/movie/?api_key=${API}&language=es-Es&query=${q}&page=1`
      );
      const movies = await response.json(); //tranformamos a json para ver el resuwltado

      setMovieList(movies.results); //ahora guardamos el resultado en un estado
      setenvio(false);
      // setpagination(0);
    })();
  }, [envio]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);

    reset(); //borramos todos el contenido del input
    setpagination(0);
    setenvio(true);
  };
  //<Button type="submit" variant="light">
  //        Buscar
  //      </Button>
  return (
    <Row>
      <Col span={9} offset={6} className="search">
        <form onSubmit={handleSearch}>
          <h1>Busca tu película</h1>
          <Input
            type="text"
            placeholder="find"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="light">
            Buscar
          </Button>
        </form>
      </Col>

      <Row>
        {movieList && (
          <>
            <h1 className="text-center">Resultados:</h1>
            <br />
            <ListMovieTV
              list={movieList}
              url={url_video}
              setKeyVideo={setKeyVideo}
              category="movie"
            />
          </>
        )}
      </Row>
    </Row>
  );
};
