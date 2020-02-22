import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import GameContext from "./GameContext.js";

export default class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //gameSettings: this.props.gameSettings,
      showModal: false,
      socket: null
    };
    this.startRound = this.startRound.bind(this);
  }
  startRound() {
    this.state.socket.emit("nextRound");
  }
  render() {
    return (
      <div>
        <SocketContext.Consumer>
          {socket => {
            if (this.state.socket !== socket) {
              this.setState({ socket: socket });
            }
          }}
        </SocketContext.Consumer>
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
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="12" className="text-center">
              <Button variant="success" size="lg" onClick={this.startRound}>
                Iniciar rodada
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
