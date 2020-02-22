import React, { Component } from "react";
import GameContext from "./GameContext.js";
import vsImg from "./../img/vs.png";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

export default class LifeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings
    };
    this.round = this.round.bind(this);
  }

  round() {
    if (this.state.gameSettings.winner) {
      return "FINAL";
    } else {
      return "Round " + this.state.gameSettings.round;
    }
  }

  render() {
    return (
      <div>
        <br />
        <GameContext.Consumer>
          {gameSettings => {
            if (this.state.gameSettings) {
              if (
                this.state.gameSettings.question.totalVotes !==
                gameSettings.question.totalVotes
              ) {
                //console.log(data);
                this.setState({
                  gameSettings: gameSettings
                });
              }
            } else {
              this.setState({
                gameSettings: gameSettings
              });
            }
          }}
        </GameContext.Consumer>
        <Container fluid>
          <Row>
            <Col xs lg="5">
              <ProgressBar style={{ height: 30 + "px" }}>
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
              <ProgressBar style={{ height: 30 + "px" }}>
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
            <Col xs lg="5" className="text-left">
              <h4>Streamer</h4>
            </Col>
            <Col xs lg="2" className="text-center">
              <h4>{this.round()}</h4>
            </Col>
            <Col xs lg="5" className="text-right">
              <h4>Chat</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
