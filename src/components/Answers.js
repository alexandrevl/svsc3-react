import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalWinner from "./ModalWinner.js";
import StartRound from "./StartRound.js";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import Emojis from "./Emojis";

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings,
      playButton: {
        title: "Pause",
        variant: "outline-warning"
      }
    };
    this.pause = this.pause.bind(this);
  }
  componentWillUpdate(data) {
    //console.log(this.state.gameSettings);
    //console.log(data.gameSettings);
    if (this.state.gameSettings.question.id !== data.gameSettings.question.id) {
      console.log(data);
      this.setState({
        gameSettings: data.gameSettings
      });
      let playButton = null;
      if (data.gameSettings.question.isPlay === false) {
        playButton = {
          title: "Play",
          variant: "outline-primary"
        };
      } else {
        playButton = {
          title: "Pause",
          variant: "outline-warning"
        };
      }
      this.setState({
        playButton: playButton
      });
    }
  }
  url_emoji(emoji) {
    let img = "img/emojis/" + Emojis[emoji] + ".png";
    return img;
  }
  pause() {
    let playButton = null;
    if (!this.state.gameSettings.question.isPlay === false) {
      playButton = {
        title: "Play",
        variant: "outline-primary"
      };
    } else {
      playButton = {
        title: "Pause",
        variant: "outline-warning"
      };
    }
    this.setState({
      playButton: playButton
    });
    this.state.socket.emit("pause-play");
  }
  render() {
    if (this.state.gameSettings.question.isActive) {
      return (
        <div>
          <SocketContext.Consumer>
            {socket => {
              if (this.state.socket !== socket) {
                this.setState({ socket: socket });
              }
            }}
          </SocketContext.Consumer>
          <Container>
            <Row className="justify-content-md-center">
              <h4>
                {this.state.gameSettings.question.title} (
                {this.state.gameSettings.question.totalVotes})
              </h4>
            </Row>
            <Row className="justify-content-md-center">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td className="text-center align-middle">
                      <img
                        src={this.url_emoji(
                          this.state.gameSettings.question.answers[0].emoji
                        )}
                        width="45vw"
                        alt="img1"
                      />
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[0].text}
                      </h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[0].votes > 0
                          ? (
                              (this.state.gameSettings.question.answers[0]
                                .votes *
                                100) /
                              this.state.gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                    <td className="text-center align-middle">
                      <img
                        src={this.url_emoji(
                          this.state.gameSettings.question.answers[1].emoji
                        )}
                        width="45vw"
                        alt="img1"
                      />
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[1].text}
                      </h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[1].votes > 0
                          ? (
                              (this.state.gameSettings.question.answers[1]
                                .votes *
                                100) /
                              this.state.gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      <img
                        src={this.url_emoji(
                          this.state.gameSettings.question.answers[2].emoji
                        )}
                        width="45vw"
                        alt="img1"
                      />
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[2].text}
                      </h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[2].votes > 0
                          ? (
                              (this.state.gameSettings.question.answers[2]
                                .votes *
                                100) /
                              this.state.gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                    <td className="text-center align-middle">
                      <img
                        src={this.url_emoji(
                          this.state.gameSettings.question.answers[3].emoji
                        )}
                        width="45vw"
                        alt="img1"
                      />
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[3].text}
                      </h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {this.state.gameSettings.question.answers[3].votes > 0
                          ? (
                              (this.state.gameSettings.question.answers[3]
                                .votes *
                                100) /
                              this.state.gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
              <Col xs lg="6" className="text-center">
                <Button
                  variant={this.state.playButton.variant}
                  onClick={this.pause}
                >
                  {this.state.playButton.title}
                </Button>
              </Col>
              <Col xs lg="6" className="text-center">
                <ModalWinner gameSettings={this.state.gameSettings} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <StartRound gameSettings={this.state.gameSettings} />
        </div>
      );
    }
  }
}
