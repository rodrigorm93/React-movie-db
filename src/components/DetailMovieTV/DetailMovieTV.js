import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { URL_API, API, backdropPath } from "../../helpers/API";
import { useFetch } from "../../hooks/useFetch";
import { Spinner, Card } from "react-bootstrap";
import { RenderVideo } from "../ModalVideo/RenderVideo";
import { Button, Progress } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

import "./DetailMovieTV.scss";

export const DetailMovieTV = () => {
  const { setpagination } = useContext(UserContext); //le asigamos nuestro componente usercontext para buscar todo lo que tenga adentro
  const [modalDetailVideo, setModalDetailVideo] = useState(false);
  const [modalDetailVideoEs, setModalDetailVideoEs] = useState(false);

  const { movieTvId } = useParams();

  const url = `${URL_API}/movie/${movieTvId}?api_key=${API}&language=es-ES`;
  const { data, loading } = useFetch(url);
  const results = !!data && data;

  const url_video = `${URL_API}/movie/${movieTvId}/videos?api_key=${API}&language=en-US`;

  const url_video_esp = `${URL_API}/movie/${movieTvId}/videos?api_key=${API}&language=es-ES`;

  useEffect(() => {
    setpagination(0);
  });
  //console.log(results);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Card className="bg-dark text-white animate__animated animate__pulse">
            <Card.Img
              className="img_poster"
              src={`${backdropPath}${results.backdrop_path}`}
              alt="Card image"
            />

            <Card.ImgOverlay>
              <Card.Title>{results.original_title}</Card.Title>

              {results.title && <Card.Text>{results.title}</Card.Text>}

              <Card.Text>{results.overview}</Card.Text>
              {results.production_countries.length > 0 && (
                <Card.Text>
                  Producción: {results.production_countries[0].name}
                </Card.Text>
              )}

              {results.homepage && (
                <Card.Text>{<a href={results.homepage}>homepage</a>}</Card.Text>
              )}

              <Progress
                className="text-color"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                width={80}
                type="circle"
                percent={results.vote_average * 10}
              />

              <Card.Text>
                <Button
                  className="btn_play"
                  onClick={() => setModalDetailVideo(true)}
                  icon={<PlayCircleOutlined />}
                >
                  Ver Trailer
                </Button>

                <Button
                  className="btn_play"
                  onClick={() => setModalDetailVideoEs(true)}
                  icon={<PlayCircleOutlined />}
                >
                  Ver Trailer (Español)
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <RenderVideo
            isOpen={modalDetailVideo}
            close={() => setModalDetailVideo(false)}
            url={url_video}
          />

          <RenderVideo
            isOpen={modalDetailVideoEs}
            close={() => setModalDetailVideoEs(false)}
            url={url_video_esp}
          />
        </>
      )}
    </div>
  );
};
