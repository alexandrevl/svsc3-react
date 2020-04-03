import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
//import GameContext from "./GameContext.js";

export default function StartRound() {
  //const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  function startRound() {
    socket.emit("nextRound");
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="text-center">
            <Button variant="success" size="lg" onClick={startRound}>
              Iniciar rodada
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
