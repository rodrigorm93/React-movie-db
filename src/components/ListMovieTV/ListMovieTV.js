import React from "react";
import { Row, Col } from "antd"; //para armar las filas y columnas

import "./ListMovieTV.scss";
import { MovieTVCard } from "./MovieTVCard";

export const ListMovieTV = ({ list, url, setKeyVideo, category }) => {
  return (
    <div className="box-card-list">
      <Row>
        {list.map((lists) => (
          <Col span={6} key={lists.id} className="card-list-colum">
            <MovieTVCard
              lists={lists}
              setKeyVideo={setKeyVideo}
              url={url}
              category={category}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
