import React, { useState } from "react";
import { URL_API, API } from "../helpers/API";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";
import { ListMovieTV } from "../components/ListMovieTV/ListMovieTV";

import "./styles.scss";
export const UpcomingMovie = ({ pagination }) => {
  const [keyVideo, setKeyVideo] = useState("55");

  const urlUpcoming = `${URL_API}/movie/upcoming?api_key=${API}&language=es-ES&page=${pagination}`;
  const { data, loading } = useFetch(urlUpcoming);
  const { results } = !!data && data;

  const url_video = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;

  //total de paginas
  //const urlUpcomingPages = `${URL_API}/movie/upcoming?api_key=${API}&language=es-ES&page=1`;
  //const { data: dataPage } = useFetch(urlUpcomingPages);
  //const { total_pages } = !!dataPage && dataPage;

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1 className="text-center">upcoming</h1>
          <br />
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
