import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YoutubePlayer from "./components/YoutubePlayer.js";
import Answers from "./components/Answers.js";
import socketIOClient from "socket.io-client";
import { Container, Row, Col } from "react-bootstrap";
import SocketContext from "./components/SocketContext.js";
import GameContext from "./components/GameContext.js";
import LifeBar from "./components/LifeBar.js";
import victory from "./img/victory.gif";

export default function App() {
  const [socket, setSocket] = useState(null);
  const [styleYT] = useState({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "..",
    height: ".."
  });
  const [gameSettings, setGameSettings] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [youtubeOff, setYoutubeOff] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(
      "http://" + window.location.hostname + ":21211"
    );
    setSocket(socket);
    socket.on("gameSettings", gameSettings => {
      console.log(gameSettings);
      setGameSettings(gameSettings);
      setIsReady(true);
    });
    socket.on("youtubeOff", () => {
      setYoutubeOff(true);
      setIsReady(false);
    });
    let idLive = window.location.pathname.split("/")[2];
    if (idLive) {
      socket.emit("idLive", idLive);
    }
  }, []);

  function notWorking() {
    if (youtubeOff) {
      return (
        "Utilize http://" +
        window.location.hostname +
        "/streamervschat/IDLIVEYOUTUBE"
      );
    } else {
      return "Carregando...";
    }
  }
  function winner() {
    return "O " + this.state.gameSettings.winner + " VENCEU";
  }

  if (isReady) {
    if (gameSettings.winner) {
      return (
        <div className="App">
          <GameContext.Provider value={gameSettings}>
            <SocketContext.Provider value={socket}>
              <LifeBar gameSettings={gameSettings} />
              <br />
              <br />
              <Container fluid>
                <Row className="justify-content-md-center">
                  <Col>
                    <img src={victory} width="600vw" alt="VS" />
                  </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                  <Col>
                    <h1>
                      <b>{winner()}</b>
                    </h1>
                  </Col>
                </Row>
              </Container>
            </SocketContext.Provider>
          </GameContext.Provider>
        </div>
      );
    } else {
      return (
        <div className="App">
          <GameContext.Provider value={gameSettings}>
            <SocketContext.Provider value={socket}>
              <LifeBar gameSettings={gameSettings} />
              <Container fluid>
                <Row className="justify-content-md-center">
                  <Col>
                    <YoutubePlayer
                      gameSettings={gameSettings}
                      style={styleYT}
                    />
                  </Col>
                </Row>
                <br />
                <br />
                <Row className="justify-content-md-center">
                  <Col>
                    <Answers gameSettings={gameSettings} />
                  </Col>
                </Row>
              </Container>
            </SocketContext.Provider>
          </GameContext.Provider>
        </div>
      );
    }
  } else {
    return <div>{notWorking()}</div>;
  }
}
