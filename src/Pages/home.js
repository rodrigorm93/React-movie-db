import React, { useState, useContext } from "react";
import { CarouselsApp } from "../components/CarouselsApp/CarouselsApp";
import { useFetch } from "../hooks/useFetch";
import { URL_API, API } from "../helpers/API";
import { Spinner } from "react-bootstrap";
import { ListMovieTV } from "../components/ListMovieTV/ListMovieTV";

import "./styles.scss";
import { AuthContext } from "../components/Auth/AuthContext";
export const Home = ({ category }) => {
  const { pageTopRated } = useContext(AuthContext); //sacmaos la pagina en la que vamos en la navegacion

  const [keyVideo, setKeyVideo] = useState("55");

  //Ultimos estrenos para carousel

  const url = `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`;
  const { data, loading } = useFetch(url);
  const { results } = !!data && data;

  //lista de top peliculas

  const urlTopRated = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=${pageTopRated}`;
  const { data: dataTopRate, loading: loadingTopRated } = useFetch(urlTopRated);

  const { results: TopRated } = !!dataTopRate && dataTopRate;

  const url_video = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;

  return (
    <>
      {loading ? <h1>loafding</h1> : <CarouselsApp results={results} />}

      {loadingTopRated ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1 className="text-center">Top Rated</h1>
          <br />
          <ListMovieTV
            list={TopRated}
            url={url_video}
            setKeyVideo={setKeyVideo}
            category="movie"
          />
        </>
      )}
    </>
  );
};
