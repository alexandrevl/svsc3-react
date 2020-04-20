import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Media from "./components/Media.js";
import Answers from "./components/Answers.js";
import socketIOClient from "socket.io-client";
import { Container, Row, Col } from "react-bootstrap";
import SocketContext from "./components/SocketContext.js";
import GameContext from "./components/GameContext.js";
import LifeBar from "./components/LifeBar.js";
import victory from "./img/victory.gif";

export default function App() {
  const [socket, setSocket] = useState(null);
  const [gameSettings, setGameSettings] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [youtubeOff, setYoutubeOff] = useState(false);

  useEffect(() => {
    let idLive = window.location.pathname.split("/")[1];
    console.log(window.location);

    let url = "https://multistreamer.xyz:21211?idLive=" + idLive;
    // if (window.location.hostname.includes("mrguinas")) {
    //   url =
    //     window.location.protocol +
    //     "//mrguinas.com.br" +
    //     ":21211?idLive=" +
    //     idLive +
    //     "&now=" +
    //     Date.now();
    // }
    //url = "https://localhost:21211?idLive=" + idLive;
    console.log(url);
    const socket = socketIOClient(url);
    // const socket = socketIOClient(
    //   window.location.protocol +
    //     window.location.hostname +
    //     ":21211!?idLive=" +
    //     idLive
    // );
    setYoutubeOff(true);
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
  }, []);

  function notWorking() {
    if (youtubeOff) {
      return "Utilize http://" + window.location.hostname + "/IDLIVEYOUTUBE";
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
                    <Media />
                  </Col>
                </Row>
                <br />
                <br />
                <Row className="justify-content-md-center">
                  <Col>
                    <Answers />
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
