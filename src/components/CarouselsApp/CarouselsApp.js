import React from "react";

import { Carousel } from "react-bootstrap";

import "./CarouselsApp.scss";
import { backdropPath } from "../../helpers/API";

export const CarouselsApp = ({ results }) => {
  //const [index, setIndex] = useState(0);

  //const handleSelect = (selectedIndex, e) => {
  //setIndex(selectedIndex);
  // };

  return (
    <Carousel className="carousels-app">
      {results.map((now_playing) => (
        <Carousel.Item key={now_playing.id}>
          <img
            className="d-block w-100"
            src={`${backdropPath}${now_playing.backdrop_path}`}
            alt={now_playing.id}
          />
          <Carousel.Caption>
            <h3>{now_playing.title}</h3>
            <p>{now_playing.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
