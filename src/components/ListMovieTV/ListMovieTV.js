import React, { useState } from "react";
import { Row, Col, Button } from "antd"; //para armar las filas y columnas

import { backdropPath } from "../../helpers/API";
import { RenderVideo } from "../ModalVideo/RenderVideo";
import { Card, Rate } from "antd";
import { ModalOverview } from "../ModalOverview/ModalOverview";

import "./ListMovieTV.scss";
const { Meta } = Card;
export const ListMovieTV = ({ list, url, setKeyVideo }) => {
  //const [keyVideo, setKeyVideo] = useState("55");
  const [modalVideo, setModalVideo] = useState(false);
  const [modalOverview, setmodalOverview] = useState(false);

  //const url = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;
  const [infoMovie, setInfoMovie] = useState({
    title: "",
    overview: "",
  });

  console.log(list);

  const getKeyVideo = (id_video) => {
    setKeyVideo(id_video);
    setModalVideo(true);
  };

  const isCloseModalOverview = () => {
    setmodalOverview(false);
  };
  const isOpenModalOverview = (title, overview) => {
    setInfoMovie({
      title,
      overview,
    });
    setmodalOverview(true);
  };

  return (
    <div className="box-card-list">
      <Row>
        {list.map((lists) => (
          <Col span={4} key={lists.id} className="card-list-colum">
            <Card
              className="card-list"
              hoverable
              style={{ width: 220 }}
              cover={
                <img
                  alt="example"
                  src={`${backdropPath}${lists.backdrop_path}`}
                  onClick={() => getKeyVideo(lists.id)}
                />
              }
            >
              {lists.title ? (
                <>
                  <Meta
                    title={lists.title}
                    description={lists.overview.substring(0, 150) + "..."}
                  />

                  <br />
                  <center>
                    <Button
                      onClick={() =>
                        isOpenModalOverview(lists.title, lists.overview)
                      }
                      className="text-center"
                      variant="light"
                    >
                      More...
                    </Button>
                  </center>
                </>
              ) : (
                <>
                  <Meta
                    title={lists.name}
                    description={lists.overview.substring(0, 150) + "..."}
                  />

                  <br />
                  <center>
                    <Button
                      onClick={() =>
                        isOpenModalOverview(lists.name, lists.overview)
                      }
                      className="text-center"
                      variant="light"
                    >
                      More...
                    </Button>
                  </center>
                </>
              )}

              <ModalOverview
                modalOverview={modalOverview}
                isCloseModalOverview={isCloseModalOverview}
                infoMovie={infoMovie}
              />
              <hr />

              <p className="text-center">{lists.release_date}</p>
              <Rate
                allowHalf
                defaultValue={lists.vote_average}
                count={10}
                disabled
              />
            </Card>
          </Col>
        ))}
      </Row>

      <RenderVideo
        isOpen={modalVideo}
        close={() => setModalVideo(false)}
        url={url}
      />
    </div>
  );
};
