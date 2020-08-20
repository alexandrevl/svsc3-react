import React, { useEffect, useState, useContext } from "react";
import { Modal, Row, Container, Col } from "react-bootstrap";
import GameContext from "./GameContext.js";
import vsImg from "./../img/vs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import tada from "./../sounds/tada.mp3";

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
  // const socket = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [iconResultChat, setIconResultChat] = useState(
    <FontAwesomeIcon icon={faTimes} color="red" size="9x" />
  );
  const [iconResultStreamer, setIconResultStreamer] = useState(
    <FontAwesomeIcon icon={faTimes} color="red" size="9x" />
  );

  useEffect(() => {
    // console.log(gameSettings);
    if (gameSettings.isPopup) {
      open();
    }
    gameSettings.oldQuestion.answers.forEach(answer => {
      if (answer.isCorrect) {
        setCorrectAnswer(answer.text);
      }
    });
    console.log(gameSettings.oldQuestion);
    if (gameSettings.oldQuestion.isStreamerWinner) {
      // console.log("Streamer Winner");
      setIconResultStreamer(
        <FontAwesomeIcon icon={faCheckCircle} color="green" size="9x" />
      );
    } else {
      // console.log("Streamer Loser");
      setIconResultStreamer(
        <FontAwesomeIcon icon={faTimes} color="red" size="9x" />
      );
    }
    if (gameSettings.oldQuestion.isChatWinner) {
      // console.log("Chat Winner");
      setIconResultChat(
        <FontAwesomeIcon icon={faCheckCircle} color="green" size="9x" />
      );
    } else {
      // console.log("Chat Loser");
      setIconResultChat(
        <FontAwesomeIcon icon={faTimes} color="red" size="9x" />
      );
    }
  }, [gameSettings]);

  function close() {
    setShowModal(false);
  }

  function open() {
    setShowModal(true);
  }

  return (
    <div>
      {/* <Button variant="outline-primary" onClick={open}>
        RESULTADO
      </Button> */}
      <Modal
        show={showModal}
        onHide={close}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="text-center">
              Resultado da rodada {gameSettings.round - 1}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-md-center">
              <h6>{gameSettings.oldQuestion.title}</h6>
            </Row>
            <Row className="justify-content-md-center">
              <h4>Resposta: {correctAnswer}</h4>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
              <Col xs lg="4" className="text-center">
                <h3>Streamer</h3>
                <br />
                {iconResultStreamer}
                <br />
                <br />
              </Col>
              <Col xs lg="4" className="text-center">
                <br />
                <br />
                <img src={vsImg} width="130vw" alt="VS" />
              </Col>
              <Col xs lg="4" className="text-center">
                <h3>Chat</h3>
                <br />
                {iconResultChat}
                <br />
                <br />
              </Col>
            </Row>
          </Container>
          <audio src={tada} volume="1.2" autoPlay />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="success" onClick={close}>
            Próxima Rodada
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
