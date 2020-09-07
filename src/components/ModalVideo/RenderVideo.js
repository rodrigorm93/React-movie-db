import React from "react";
import { useFetch } from "../../hooks/useFetch";

import { Modal } from "antd";
import { ModalVideo } from "./ModalVideo";
import { Alert } from "react-bootstrap";
export const RenderVideo = ({ isOpen, close, url }) => {
  const { data: videoMovie, loading } = useFetch(url);
  const { results } = !!videoMovie && videoMovie;

  const renderVideoFunction = (results, isOpen, close) => {
    if (results) {
      if (results.length > 0) {
        return (
          <>
            <ModalVideo
              videoKey={results[0].key}
              videoPlatform={results[0].site}
              isOpen={isOpen}
              close={close}
            />
          </>
        );
      } else {
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
      {loading ? (
        <div></div>
      ) : (
        <div>{renderVideoFunction(results, isOpen, close)}</div>
      )}
    </div>
  );
};
