import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StartRound from "./StartRound.js";
import { Table, Container, Row, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import Emojis from "./Emojis";
import Jokes from "./Jokes";
import Sounds from "./Sounds";

import GameContext from "./GameContext.js";

export default function Answers() {
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);

  useEffect(() => {}, [gameSettings]);

  function url_emoji(emoji) {
    let img = "img/emojis/" + Emojis[emoji];
    return img;
  }
  function nextQuestion(answerStreamer) {
    // console.log("PQQQQQ", answerStreamer);
    socket.emit("nextQuestion", answerStreamer);
  }

  if (gameSettings.question.isActive) {
    return (
      <div>
        <GameContext.Provider value={gameSettings}>
          <Container>
            <Sounds />
            <Row className="justify-content-md-center">
              <h2>
                {gameSettings.question.title} (
                {gameSettings.question.totalVotes})
              </h2>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td className="text-center align-middle">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => nextQuestion(0)}
                      >
                        <img
                          src={url_emoji(
                            gameSettings.question.answers[0].emoji
                          )}
                          width="45vw"
                          alt="img1"
                        />
                      </Button>
                    </td>
                    <td className="text-left align-middle">
                      <h4>{gameSettings.question.answers[0].text}</h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {gameSettings.question.answers[0].votes > 0
                          ? (
                              (gameSettings.question.answers[0].votes * 100) /
                              gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                    <td className="text-center align-middle">
                      <Button
                        variant="outline-warning"
                        size="lg"
                        onClick={() => nextQuestion(1)}
                      >
                        <img
                          src={url_emoji(
                            gameSettings.question.answers[1].emoji
                          )}
                          width="45vw"
                          alt="img1"
                        />
                      </Button>
                    </td>
                    <td className="text-left align-middle">
                      <h4>{gameSettings.question.answers[1].text}</h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {gameSettings.question.answers[1].votes > 0
                          ? (
                              (gameSettings.question.answers[1].votes * 100) /
                              gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      <Button
                        variant="outline-success"
                        size="lg"
                        onClick={() => nextQuestion(2)}
                      >
                        <img
                          src={url_emoji(
                            gameSettings.question.answers[2].emoji
                          )}
                          width="45vw"
                          alt="img1"
                        />
                      </Button>
                    </td>
                    <td className="text-left align-middle">
                      <h4>{gameSettings.question.answers[2].text}</h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {gameSettings.question.answers[2].votes > 0
                          ? (
                              (gameSettings.question.answers[2].votes * 100) /
                              gameSettings.question.totalVotes
                            ).toFixed(1)
                          : 0}
                        %
                      </h4>
                    </td>
                    <td className="text-center align-middle">
                      <Button
                        variant="outline-danger"
                        size="lg"
                        onClick={() => nextQuestion(3)}
                      >
                        <img
                          src={url_emoji(
                            gameSettings.question.answers[3].emoji
                          )}
                          width="45vw"
                          alt="img1"
                        />
                      </Button>
                    </td>
                    <td className="text-left align-middle">
                      <h4>{gameSettings.question.answers[3].text}</h4>
                    </td>
                    <td className="text-left align-middle">
                      <h4>
                        {gameSettings.question.answers[3].votes > 0
                          ? (
                              (gameSettings.question.answers[3].votes * 100) /
                              gameSettings.question.totalVotes
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Jokes />
            <br />
            <br />
          </Container>
        </GameContext.Provider>
      </div>
    );
  } else {
    return (
      <div>
        <StartRound gameSettings={gameSettings} />
      </div>
    );
  }
}
