import React, { useState } from "react";
import { backdropPath } from "../../helpers/API";
import { Row, Col } from "antd"; //para armar las filas y columnas
import { Card } from "antd";
import { ModalVideo } from "../ModalVideo/ModalVideo";
const { Meta } = Card;

export const UpcomingList = ({ results }) => {
  const [keyVideo, setKeyVideo] = useState("55");
  const [modalVideo, setModalVideo] = useState(false);

  const getKeyVideo = (id_video) => {
    setKeyVideo(id_video);
    setModalVideo(true);
  };

  return (
    <div>
      <Row>
        {results.map((movie_upcoming) => (
          <Col span={4} key={movie_upcoming.id}>
            <Card
              className="card-list"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={`${backdropPath}${movie_upcoming.backdrop_path}`}
                  onClick={() => getKeyVideo(movie_upcoming.id)}
                />
              }
            >
              <Meta
                title={movie_upcoming.title}
                description={movie_upcoming.overview.substring(0, 150)}
              />
              <hr />
              <center>
                <Meta title={movie_upcoming.release_date} />
              </center>
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
