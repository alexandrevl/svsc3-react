import React, { useContext } from "react";
import GameContext from "./GameContext.js";
import vsImg from "./../img/vs.png";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

export default function LifeBar() {
  const gameSettings = useContext(GameContext);

  function round() {
    if (gameSettings.winner) {
      return "FINAL";
    } else {
      return "Round " + gameSettings.round;
    }
  }
  if (gameSettings) {
    // console.log("gameSettings", gameSettings.lifeBar);
    return (
      <div>
        <br />
        <Container fluid>
          <Row>
            <Col xs lg="5">
              <ProgressBar style={{ height: 30 + "px" }}>
                <ProgressBar
                  variant="danger"
                  now={
                    gameSettings.lifeBar.LIFE_STREAMER -
                    gameSettings.lifeBar.lifeStreamer
                  }
                  key={1}
                />
                <ProgressBar
                  variant="warning"
                  now={gameSettings.lifeBar.lifeStreamer}
                  key={2}
                />
              </ProgressBar>
            </Col>
            <Col xs lg="2">
              <img src={vsImg} width="45vw" alt="VS" />
            </Col>
            <Col xs lg="5">
              <ProgressBar style={{ height: 30 + "px" }}>
                <ProgressBar
                  variant="warning"
                  now={gameSettings.lifeBar.lifeChat}
                  key={1}
                />
                <ProgressBar
                  variant="danger"
                  now={
                    gameSettings.lifeBar.LIFE_CHAT -
                    gameSettings.lifeBar.lifeChat
                  }
                  key={2}
                />
              </ProgressBar>
            </Col>
          </Row>
          <Row>
            <Col xs lg="2" className="text-left">
              <h4>Streamer</h4>
            </Col>
            <Col xs lg="3" className="text-right"></Col>
            <Col xs lg="2" className="text-center">
              <h4>{round()}</h4>
            </Col>
            <Col xs lg="3" className="text-left"></Col>
            <Col xs lg="2" className="text-right">
              <h4>Chat</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return "Alow";
  }
}
