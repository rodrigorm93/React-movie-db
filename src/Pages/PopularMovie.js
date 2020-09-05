import React, { useState, useContext } from "react";
import { URL_API, API } from "../helpers/API";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";
import { ListMovieTV } from "../components/ListMovieTV/ListMovieTV";

import { UserContext } from "../components/UserContext";

import "./styles.scss";

export const PopularMovie = ({ category }) => {
  const [keyVideo, setKeyVideo] = useState("55");
  const { pageTopRated: pagination } = useContext(UserContext);

  const url_video = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;

  const url = `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=${pagination}`;
  const { data, loading } = useFetch(url);
  const { results } = !!data && data;

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1 className="text-center">popular</h1>
          <ListMovieTV
            list={results}
            url={url_video}
            setKeyVideo={setKeyVideo}
            category={category}
          />
        </>
      )}
    </div>
  );
};
