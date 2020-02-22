import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YoutubePlayer from "./components/YoutubePlayer.js";
import Answers from "./components/Answers.js";
import Settings from "./components/Settings.js";
import vsImg from "./img/vs.png";
import socketIOClient from "socket.io-client";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import SocketContext from "./components/SocketContext.js";
import GameContext from "./components/GameContext.js";

class App extends Component {
  constructor() {
    super();
    let url_location = "http://" + window.location.hostname + ":21211";
    if (window.location.hostname === "mrguinas.com.br") {
      url_location = "https://" + window.location.hostname + "/node";
    }
    this.state = {
      response: false,
      socket: null,
      hostname: window.location.hostname,
      endpoint: url_location,
      gameSettings: {
        question: {
          isActive: false,
          title: "",
          idVideo: "jh5W3sjLtUQ",
          anwsers: [
            {
              emoji: "",
              img_emoji: vsImg,
              text: ""
            },
            {
              emoji: "",
              img_emoji: vsImg,
              text: ""
            },
            {
              emoji: "",
              img_emoji: vsImg,
              text: ""
            },
            {
              emoji: "",
              img_emoji: vsImg,
              text: ""
            }
          ]
        },

        lifeBar: {
          lifeStreamer: 200,
          lifeChat: 200
        }
      }
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    this.setState({ socket: socket });
    socket.on("gameSettings", gameSettings => {
      console.log(gameSettings);
      this.setState({
        gameSettings: gameSettings
      });
    });
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "..",
      height: ".."
    };
    return (
      <div className="App">
        <GameContext.Provider value={this.state.gameSettings}>
          <SocketContext.Provider value={this.state.socket}>
            <Container fluid>
              <Row>
                <Col className="text-right">
                  <Settings />
                </Col>
              </Row>
              <Row>
                <Col xs lg="5">
                  <ProgressBar style={{ height: 25 + "px" }}>
                    <ProgressBar
                      variant="danger"
                      now={100 - this.state.gameSettings.lifeBar.lifeStreamer}
                      key={1}
                    />
                    <ProgressBar
                      variant="warning"
                      now={this.state.gameSettings.lifeBar.lifeStreamer}
                      key={2}
                    />
                  </ProgressBar>
                </Col>
                <Col xs lg="2">
                  <img src={vsImg} width="45vw" alt="VS" />
                </Col>
                <Col xs lg="5">
                  <ProgressBar style={{ height: 25 + "px" }}>
                    <ProgressBar
                      variant="warning"
                      now={this.state.gameSettings.lifeBar.lifeChat}
                      key={1}
                    />
                    <ProgressBar
                      variant="danger"
                      now={100 - this.state.gameSettings.lifeBar.lifeChat}
                      key={2}
                    />
                  </ProgressBar>
                </Col>
              </Row>
              <Row>
                <Col xs lg="6" className="text-left">
                  <h5>Streamer</h5>
                </Col>
                <Col xs lg="6" className="text-right">
                  <h5>Chat</h5>
                </Col>
              </Row>
              <br />
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
}

export default App;
