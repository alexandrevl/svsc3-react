import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YoutubePlayer from "./components/YoutubePlayer.js";
import Answers from "./components/Answers.js";
import vsImg from "./img/vs.png";

import { ProgressBar, Container, Row, Col } from "react-bootstrap";

function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "..",
    height: ".."
  };

  return (
    <div className="App">
      <br />
      <Container fluid>
        <Row>
          <Col xs lg="5">
            <ProgressBar style={{ height: 25 + "px" }}>
              <ProgressBar variant="danger" now={70} key={1} />
              <ProgressBar variant="warning" now={30} key={2} />
            </ProgressBar>
          </Col>
          <Col xs lg="2">
            <img src={vsImg} width="45vw" alt="VS" />
          </Col>
          <Col xs lg="5">
            <ProgressBar style={{ height: 25 + "px" }}>
              <ProgressBar variant="warning" now={90} key={1} />
              <ProgressBar variant="danger" now={10} key={2} />
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
            <YoutubePlayer src="jh5W3sjLtUQ" style={style} />
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
    </div>
  );
}

export default App;
