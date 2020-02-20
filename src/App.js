import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YoutubePlayer from "./components/YoutubePlayer.js";
import Answers from "./components/Answers.js";
import Settings from "./components/Settings.js";
import vsImg from "./img/vs.png";
import socketIOClient from "socket.io-client";
import { ProgressBar, Container, Row, Col, Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      hostname: window.location.hostname,
      endpoint: "http://" + window.location.hostname + ":21211",
      gameSettings: {
        question: {
          title: "O que vai acontecer?",
          idVideo: "jh5W3sjLtUQ",
          anwsers: [
            {
              emoji: "🙊",
              img_emoji:
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/speak-no-evil-monkey_1f64a.png",
              text: "O guinas começa a cantar"
            },
            {
              emoji: "🤡",
              img_emoji:
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/freezing-face_1f976.png",
              text: "Um macaco entra na tela"
            },
            {
              emoji: "🥶",
              img_emoji:
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/clown-face_1f921.png",
              text: "Aparece uma coisa incrível"
            },
            {
              emoji: "👽",
              img_emoji:
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/extraterrestrial-alien_1f47d.png",
              text: "O Guinas cai de um prédio bem alto"
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
                  now={200 - this.state.gameSettings.lifeBar.lifeStreamer}
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
                  now={200 - this.state.gameSettings.lifeBar.lifeChat}
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
                src={this.state.gameSettings.question.idVideo}
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
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col xs lg="4" className="text-left">
              <Button variant="outline-primary">Pausar</Button>
            </Col>
            <Col xs lg="4" className="text-center">
              <Button variant="outline-warning">Parar</Button>
            </Col>
            <Col xs lg="4" className="text-right">
              <Button variant="outline-danger">Próxima</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
