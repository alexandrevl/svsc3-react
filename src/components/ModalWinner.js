import React, { useEffect, useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import GameContext from "./GameContext.js";
import trophy from "./../img/trophy.gif";

export default function ModalWinner() {
  // constructor(props) {
  //   super(props);
  //    = {
  //     gameSettings: .propsgameSettings,
  //     showModal: false,
  //     buttonDisabled: true
  //   };
  //   .close = .close.bind();
  //   .open = .open.bind();
  //   .nextRound = .nextRound.bind();
  //   .whoIsWinner = .whoIsWinner.bind();
  // }
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, [gameSettings]);

  function close() {
    setShowModal(false);
  }

  function open() {
    setShowModal(true);
  }
  function nextRound() {
    if (
      !gameSettings.question.isStreamerWinner &&
      !gameSettings.question.isChatWinner
    ) {
    } else {
      close();
      socket.emit("nextQuestion");
    }
  }

  function whoIsWinner() {
    if (
      !gameSettings.question.isStreamerWinner &&
      !gameSettings.question.isChatWinner
    ) {
      return "Ainda ninguém";
    } else {
      if (gameSettings.question.isStreamerWinner) {
        return "Streamer VENCEU";
      }
      if (gameSettings.question.isChatWinner) {
        return "Chat VENCEU";
      }
    }
  }

  return (
    <div>
      <Button variant="outline-primary" onClick={open}>
        RESULTADO
      </Button>
      <Modal
        show={showModal}
        onHide={close}
        animation={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="text-center">
              Resultado da rodada {gameSettings.round}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={trophy} width="400vw" alt="VS" />
            <br />
            <h1>{whoIsWinner()}</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={nextRound}>
            Próxima Rodada
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
