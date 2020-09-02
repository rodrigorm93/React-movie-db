import React, { useState } from "react";
import { Row, Col } from "antd"; //para armar las filas y columnas

import { Card, Rate } from "antd";

import "./MovieListTopRated.scss";
import { backdropPath } from "../../helpers/API";
import { ModalVideo } from "../ModalVideo/ModalVideo";
const { Meta } = Card;
export const MovieListTopRated = ({ TopRated }) => {
  console.log(TopRated);
  const [keyVideo, setKeyVideo] = useState("55");
  const [modalVideo, setModalVideo] = useState(false);

  const getKeyVideo = (id_video) => {
    setKeyVideo(id_video);
    setModalVideo(true);
  };

  return (
    <div>
      <Row>
        {TopRated.map((movie_top) => (
          <Col span={4} key={movie_top.id}>
            <Card
              className="card-list"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={`${backdropPath}${movie_top.backdrop_path}`}
                  onClick={() => getKeyVideo(movie_top.id)}
                />
              }
            >
              <Meta
                title={movie_top.title}
                description={movie_top.overview.substring(0, 150)}
              />
              <Rate
                allowHalf
                defaultValue={movie_top.vote_average}
                count={10}
                disabled
              />
            </Card>
          </Col>
        ))}
      </Row>

      <ModalVideo
        isOpen={modalVideo}
        close={() => setModalVideo(false)}
        keyVideo={keyVideo}
      />
    </div>
  );
};
