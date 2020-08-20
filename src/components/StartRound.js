import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import SocketContext from "./SocketContext";

//import GameContext from "./GameContext.js";

export default function StartRound() {
  //const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [button, setButton] = useState("Iniciar rodada");
  const [enableButton, setEnableButton] = useState(true);

  function startRound() {
    setEnableButton(false);
    setButton(
      <Spinner
        animation="border"
        variant="white"
        style={{ width: "2rem", height: "2rem" }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
    socket.emit("nextRound");
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              variant="success"
              size="lg"
              disabled={!enableButton}
              onClick={startRound}
            >
              {button}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
