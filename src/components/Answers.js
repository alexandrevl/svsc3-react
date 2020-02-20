import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row } from "react-bootstrap";

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings
    };
  }
  componentDidUpdate(data) {
    if (
      this.state.gameSettings.question.totalVotes !==
      data.gameSettings.question.totalVotes
    ) {
      console.log(data);
      this.setState({
        gameSettings: data.gameSettings
      });
    }
  }

  render() {
    return (
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
                    src={this.state.gameSettings.question.anwsers[0].img_emoji}
                    width="45vw"
                    alt="img1"
                  />
                </td>
                <td className="text-left align-middle">
                  <h4>{this.state.gameSettings.question.anwsers[0].text}</h4>
                </td>
                <td className="text-left align-middle">
                  <h4>
                    {(
                      (this.state.gameSettings.question.anwsers[0].votes *
                        100) /
                      this.state.gameSettings.question.totalVotes
                    ).toFixed(1)}
                    %
                  </h4>
                </td>
                <td className="text-center align-middle">
                  <img
                    src={this.state.gameSettings.question.anwsers[1].img_emoji}
                    width="45vw"
                    alt="img1"
                  />
                </td>
                <td className="text-left align-middle">
                  <h4>{this.state.gameSettings.question.anwsers[1].text}</h4>
                </td>
                <td className="text-left align-middle">
                  <h4>
                    {(
                      (this.state.gameSettings.question.anwsers[1].votes *
                        100) /
                      this.state.gameSettings.question.totalVotes
                    ).toFixed(1)}
                    %
                  </h4>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle">
                  <img
                    src={this.state.gameSettings.question.anwsers[2].img_emoji}
                    width="45vw"
                    alt="img1"
                  />
                </td>
                <td className="text-left align-middle">
                  <h4>{this.state.gameSettings.question.anwsers[2].text}</h4>
                </td>
                <td className="text-left align-middle">
                  <h4>
                    {(
                      (this.state.gameSettings.question.anwsers[2].votes *
                        100) /
                      this.state.gameSettings.question.totalVotes
                    ).toFixed(1)}
                    %
                  </h4>
                </td>
                <td className="text-center align-middle">
                  <img
                    src={this.state.gameSettings.question.anwsers[3].img_emoji}
                    width="45vw"
                    alt="img1"
                  />
                </td>
                <td className="text-left align-middle">
                  <h4>{this.state.gameSettings.question.anwsers[3].text}</h4>
                </td>
                <td className="text-left align-middle">
                  <h4>
                    {(
                      (this.state.gameSettings.question.anwsers[3].votes *
                        100) /
                      this.state.gameSettings.question.totalVotes
                    ).toFixed(1)}
                    %
                  </h4>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
