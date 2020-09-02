import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { Modal } from "antd";
import { URL_API, API } from "../../helpers/API";
import { ModalVid } from "./ModalVid";
import { Alert } from "react-bootstrap";
export const ModalVideo = ({ isOpen, close, keyVideo }) => {
  const url = `${URL_API}/movie/${keyVideo}/videos?api_key=${API}&language=en-US`;
  const { data: videoMovie, loading } = useFetch(url);
  const { results } = !!videoMovie && videoMovie;
  console.log("results", results);

  const renderVideo = (results, isOpen, close) => {
    if (results) {
      if (results.length > 0) {
        return (
          <>
            <ModalVid
              videoKey={results[0].key}
              videoPlatform={results[0].site}
              isOpen={isOpen}
              close={close}
            />
          </>
        );
      } else {
        console.log("otierne");
        return (
          <>
            <Modal centered visible={isOpen} onCancel={close} onOk={close}>
              <Alert variant="danger">Trailer no Disponible</Alert>
            </Modal>
          </>
        );
      }
    }
  };

  return (
    <div>
      {loading ? <div></div> : <div>{renderVideo(results, isOpen, close)}</div>}
    </div>
  );
};
