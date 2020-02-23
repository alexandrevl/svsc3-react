import React, { Component } from "react";
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

class App extends Component {
  constructor() {
    super();
    let url_location = "http://" + window.location.hostname + ":21211";
    // if (window.location.hostname === "mrguinas.com.br") {
    //   url_location = "https://" + window.location.hostname + "/node";
    // }
    this.state = {
      response: false,
      socket: null,
      hostname: window.location.hostname,
      endpoint: url_location
    };
    this.notWorking = this.notWorking.bind(this);
  }
  componentWillMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    this.setState({ socket: socket });
    socket.on("gameSettings", gameSettings => {
      console.log(gameSettings);
      this.setState({
        gameSettings: gameSettings
      });
      this.setState({ isReady: true });
    });
    socket.on("youtubeOff", () => {
      this.setState({
        youtubeOff: true
      });
      this.setState({ isReady: false });
    });
    let idLive = window.location.pathname.split("/")[2];
    if (idLive) {
      socket.emit("idLive", idLive);
    }
  }
  notWorking() {
    if (this.state.youtubeOff) {
      return (
        "Utilize http://" +
        window.location.hostname +
        "/streamervschat/IDLIVEYOUTUBE"
      );
    } else {
      return "Carregando...";
    }
  }
  winner() {
    return "O " + this.state.gameSettings.winner + " VENCEU";
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "..",
      height: ".."
    };

    if (this.state.isReady) {
      if (this.state.gameSettings.winner) {
        return (
          <div className="App">
            <GameContext.Provider value={this.state.gameSettings}>
              <SocketContext.Provider value={this.state.socket}>
                <LifeBar gameSettings={this.state.gameSettings} />
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
                        <b>{this.winner()}</b>
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
            <GameContext.Provider value={this.state.gameSettings}>
              <SocketContext.Provider value={this.state.socket}>
                <LifeBar gameSettings={this.state.gameSettings} />
                <Container fluid>
                  <Row className="justify-content-md-center">
                    <Col>
                      <YoutubePlayer
                        gameSettings={this.state.gameSettings}
                        style={style}
                      />
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <Row className="justify-content-md-center">
                    <Col>
                      <Answers gameSettings={this.state.gameSettings} />
                    </Col>
                  </Row>
                </Container>
              </SocketContext.Provider>
            </GameContext.Provider>
          </div>
        );
      }
    } else {
      return <div>{this.notWorking()}</div>;
    }
  }
}

export default App;
