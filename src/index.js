import React from "react";
import ReactDOM from "react-dom";

import MovieApp from "./MovieApp";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import "./index.css";

ReactDOM.render(
  <MovieApp />,

  document.getElementById("root")
);
