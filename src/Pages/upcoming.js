import React from "react";
import { URL_API, API } from "../helpers/API";
import { useFetch } from "../hooks/useFetch";
import { UpcomingList } from "../components/Upcoming/UpcomingList";
import { Spinner } from "react-bootstrap";

export const Upcoming = ({ pagination }) => {
  const urlUpcoming = `${URL_API}/movie/upcoming?api_key=${API}&language=es-ES&page=${pagination}`;
  const { data, loading } = useFetch(urlUpcoming);
  const { results } = !!data && data;

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
        <UpcomingList results={results} />
      )}
    </div>
  );
};
