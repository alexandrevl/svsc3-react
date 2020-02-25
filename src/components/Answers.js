import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalWinner from "./ModalWinner.js";
import StartRound from "./StartRound.js";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import Emojis from "./Emojis";
import GameContext from "./GameContext.js";

export default function Answers() {
  const gameSettings = useContext(GameContext);
  const [socket, setSocket] = useState(null);
  //const [gameSettings, setGameSettings] = useState(null);
  const [playButton, setPlayButton] = useState({
    title: "Pause",
    variant: "outline-warning"
  });

  useEffect(() => {
    let playButton = null;
    if (gameSettings.question.isPlay === false) {
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
    setPlayButton(playButton);
  }, [gameSettings]);

  function url_emoji(emoji) {
    let img = "img/emojis/" + Emojis[emoji] + ".png";
    return img;
  }
  function pause() {
    let playButton = null;
    if (!gameSettings.question.isPlay === false) {
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
    setPlayButton(playButton);
    socket.emit("pause-play");
  }
  if (gameSettings.question.isActive) {
    return (
      <div>
        <GameContext.Provider value={gameSettings}>
          <SocketContext.Consumer>
            {socket => {
              setSocket(socket);
            }}
          </SocketContext.Consumer>
          <Container>
            <Row className="justify-content-md-center">
              <h4>
                {gameSettings.question.title} (
                {gameSettings.question.totalVotes})
              </h4>
            </Row>
            <Row className="justify-content-md-center">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td className="text-center align-middle">
                      <img
                        src={url_emoji(gameSettings.question.answers[0].emoji)}
                        width="45vw"
                        alt="img1"
                      />
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
                      <img
                        src={url_emoji(gameSettings.question.answers[1].emoji)}
                        width="45vw"
                        alt="img1"
                      />
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
                      <img
                        src={url_emoji(gameSettings.question.answers[2].emoji)}
                        width="45vw"
                        alt="img1"
                      />
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
                      <img
                        src={url_emoji(gameSettings.question.answers[3].emoji)}
                        width="45vw"
                        alt="img1"
                      />
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
            <Row className="justify-content-md-center">
              <Col xs lg="6" className="text-center">
                <Button variant={playButton.variant} onClick={pause}>
                  {playButton.title}
                </Button>
              </Col>
              <Col xs lg="6" className="text-center">
                <ModalWinner gameSettings={gameSettings} />
              </Col>
            </Row>
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
