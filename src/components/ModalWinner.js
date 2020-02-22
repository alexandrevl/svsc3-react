import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";

export default class ModalWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings,
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.whoIsWinner = this.whoIsWinner.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  nextRound() {
    if (
      !this.state.gameSettings.question.isStreamerWinner &&
      !this.state.gameSettings.question.isChatWinner
    ) {
    } else {
      this.close();
      this.state.socket.emit("nextQuestion");
    }
  }

  whoIsWinner() {
    if (
      !this.state.gameSettings.question.isStreamerWinner &&
      !this.state.gameSettings.question.isChatWinner
    ) {
      return "Ainda ninguém";
    } else {
      if (this.state.gameSettings.question.isStreamerWinner) {
        return "Streamer VENCEU";
      }
      if (this.state.gameSettings.question.isChatWinner) {
        return "Chat VENCEU";
      }
    }
  }

  componentWillUpdate(data) {
    if (this.state.gameSettings.question.id !== data.gameSettings.question.id) {
      //console.log(data);
      this.setState({
        gameSettings: data.gameSettings
      });
    }
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
        <Button variant="outline-primary" onClick={this.open}>
          RESULTADO
        </Button>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          animation={false}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Resultado da rodada {this.state.gameSettings.round}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <br />
            <div className="justify-content-md-center">
              <h1>{this.whoIsWinner()}</h1>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.nextRound}>
              Próxima Rodada
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
