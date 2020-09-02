import React from "react";
import { CarouselsApp } from "../components/CarouselsApp/CarouselsApp";
import { useFetch } from "../hooks/useFetch";
import { URL_API, API } from "../helpers/API";
import { MovieListTopRated } from "../components/MovieListTopRated/MovieListTopRated";
import { Spinner } from "react-bootstrap";

export const Home = ({ pageTopRated }) => {
  //Ultimos estrenos para carousel
  const url = `${URL_API}/movie/now_playing?api_key=${API}&language=en-US&page=1`;
  const { data, loading } = useFetch(url);
  const { results } = !!data && data;

  //lista de top peliculas

  const urlTopRated = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=${pageTopRated}`;
  const { data: dataTopRate, loading: loadingTopRated } = useFetch(urlTopRated);
  const { results: TopRated } = !!dataTopRate && dataTopRate;

  return (
    <>
      {loading ? <h1>loafding</h1> : <CarouselsApp results={results} />}

      {loadingTopRated ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <MovieListTopRated TopRated={TopRated} />
      )}
    </>
  );
};
