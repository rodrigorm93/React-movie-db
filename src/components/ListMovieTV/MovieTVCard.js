import React, { useState } from "react";
import { Card, Rate, Button } from "antd";
import { backdropPath } from "../../helpers/API";
import { RenderVideo } from "../ModalVideo/RenderVideo";
import { ModalOverview } from "../ModalOverview/ModalOverview";
import { Link } from "react-router-dom";

const { Meta } = Card;
export const MovieTVCard = ({ lists, setKeyVideo, url, category }) => {
  const [modalOverview, setmodalOverview] = useState(false);
  const [modalVideo, setModalVideo] = useState(false);

  const [infoMovie, setInfoMovie] = useState({
    title: "",
    overview: "",
  });

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
    <>
      <Card
        className="card-list animate__animated animate__fadeIn"
        hoverable
        style={{ width: 300 }}
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
              description={lists.overview.substring(0, 50) + "..."}
            />

            {category ? (
              <Link to={`./movieTv/${lists.id}`}>Más...</Link>
            ) : (
              <div></div>
            )}
            <br />
            <center>
              <Button
                onClick={() => isOpenModalOverview(lists.title, lists.overview)}
                className="text-center"
                variant="light"
              >
                Overview
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
                onClick={() => isOpenModalOverview(lists.name, lists.overview)}
                className="text-center"
                variant="light"
              >
                Overview
              </Button>
            </center>
          </>
        )}

        <hr />

        <p className="text-center">{lists.release_date}</p>
        <Rate allowHalf defaultValue={lists.vote_average} count={10} disabled />
      </Card>

      <ModalOverview
        modalOverview={modalOverview}
        isCloseModalOverview={isCloseModalOverview}
        infoMovie={infoMovie}
      />

      <RenderVideo
        isOpen={modalVideo}
        close={() => setModalVideo(false)}
        url={url}
      />
    </>
  );
};
