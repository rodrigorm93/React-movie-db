import React from "react";
import { Modal } from "antd";

import "./ModalOverview.scss";
export const ModalOverview = ({
  modalOverview,
  isCloseModalOverview,
  infoMovie,
}) => {
  return (
    <Modal
      className="modal-over"
      visible={modalOverview}
      centered
      onCancel={isCloseModalOverview}
      footer={false}
    >
      <h3>{infoMovie?.title}</h3>
      <h3>{infoMovie?.name}</h3>

      <p>{infoMovie.overview}</p>
    </Modal>
  );
};
