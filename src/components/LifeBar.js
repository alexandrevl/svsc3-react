import React, { useContext, useState } from "react";
import GameContext from "./GameContext.js";
import vsImg from "./../img/vs.png";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import SocketContext from "./SocketContext.js";

export default function LifeBar() {
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [superChat1, setSuperChat1] = useState("");
  const [superChat2, setSuperChat2] = useState("");

  socket.on("superChat", data => {
    let { name, randNum, value } = data;
    // console.log(data);
    if (randNum === 1) {
      setSuperChat1(`${name}: + ${value}`);
      setVisible1(true);
      setTimeout(() => {
        setVisible1(false);
      }, 3000);
    } else {
      setSuperChat2(`${name}: + ${value}`);
      setVisible2(true);
      setTimeout(() => {
        setVisible2(false);
      }, 3000);
    }
  });
  const [timeAnimation] = useState(30000);

  // let styleReversed = {
  //   direction: "rtl"
  // };

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
          <Row>
            <Col xs lg="2" className="text-left">
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible1}
              >
                <h4 style={{ color: "yellow" }}>&nbsp;{superChat1}</h4>
              </Animated>
            </Col>
            <Col xs lg="3" className="text-right"></Col>
            <Col xs lg="2" className="text-center"></Col>
            <Col xs lg="3" className="text-left"></Col>
            <Col xs lg="2" className="text-right">
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible2}
              >
                <h4 style={{ color: "yellow" }}>&nbsp;{superChat2}</h4>
              </Animated>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return "Alow";
  }
}
