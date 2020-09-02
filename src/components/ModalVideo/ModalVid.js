import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVid.scss";
export function ModalVid({ videoKey, isOpen, close }) {
  //isOpen =es el estado del modal si esta abierto o cerrado

  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    setUrlVideo(`https://youtu.be/${videoKey}`);
  }, [videoKey]); // DE LAS VARIABLES QUE SE VAN A EJECUTAR SE HARA QUE EL USEEFECT SE VUELVA A EJECUTAR, si alguna de
  //esas dos variables sufre un cambio el useEffect se actualizara

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} playing={isOpen} />
    </Modal>
  );
}
