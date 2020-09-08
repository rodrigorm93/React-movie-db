import React, { useState, useContext } from "react";
import { URL_API, API } from "../helpers/API";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";
import { ListMovieTV } from "../components/ListMovieTV/ListMovieTV";
import "./styles.scss";
import { AuthContext } from "../components/Auth/AuthContext";
export const PopularTV = () => {
  const { pageTopRated: pagination } = useContext(AuthContext);

  const [keyVideo, setKeyVideo] = useState("55");

  const url_video = `${URL_API}/tv/${keyVideo}/videos?api_key=${API}&language=en-US`;

  const url = `${URL_API}/tv/popular?api_key=${API}&language=es-ES&page=${pagination}`;
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
          />
        </>
      )}
    </div>
  );
};
