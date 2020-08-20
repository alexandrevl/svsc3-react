import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Dropdown
} from "react-bootstrap";
import SocketContext from "./SocketContext";

import GameContext from "./GameContext.js";

export default function StartRound() {
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [button, setButton] = useState("Iniciar rodada");
  const [enableButton, setEnableButton] = useState(true);
  const [category, setCategory] = useState(15);
  const [textCategory, setTextCategory] = useState("Video Games");

  function startRound() {
    setEnableButton(false);
    setButton(
      <Spinner
        animation="border"
        variant="white"
        style={{ width: "2rem", height: "2rem" }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
    socket.emit("nextRound", category);
  }
  function changeCategory(idCategory) {
    switch (idCategory) {
      case 15:
        setTextCategory("Video Games");
        break;
      case 9:
        setTextCategory("Conhecimentos gerais");
        break;
      case 10:
        setTextCategory("Livros");
        break;
      case 11:
        setTextCategory("Filmes");
        break;
      case 12:
        setTextCategory("Música");
        break;
      case 14:
        setTextCategory("Televisão");
        break;
      case 19:
        setTextCategory("Matemática");
        break;
      case 20:
        setTextCategory("Mitologia");
        break;
      case 21:
        setTextCategory("Esportes");
        break;
      case 22:
        setTextCategory("Geografia");
        break;
      case 23:
        setTextCategory("História");
        break;
      case 25:
        setTextCategory("Arte");
        break;
      case 26:
        setTextCategory("Celebridades");
        break;
      case 28:
        setTextCategory("Veículos");
        break;
      case 29:
        setTextCategory("Comics");
        break;
      case 30:
        setTextCategory("Gadgets");
        break;
      case 31:
        setTextCategory("Anime e Mangá");
        break;
      case 32:
        setTextCategory("Desenhos e animações");
        break;

      default:
        break;
    }
    setCategory(idCategory);
  }
  useEffect(() => {
    if (gameSettings.round === 1) {
    }
  }, [gameSettings]);

  if (gameSettings.round !== 1) {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="12" className="text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button
                variant="success"
                size="lg"
                disabled={!enableButton}
                onClick={startRound}
              >
                {button}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="12" className="text-center">
              <br />
              <br />
              <h5>Escolha uma das Categorias</h5>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {textCategory}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(15);
                    }}
                  >
                    Video Games
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(9);
                    }}
                  >
                    Conhecimentos gerais
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(10);
                    }}
                  >
                    Livros
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(11);
                    }}
                  >
                    Filmes
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(12);
                    }}
                  >
                    Música
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(14);
                    }}
                  >
                    Televisão
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(19);
                    }}
                  >
                    Matemática
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(20);
                    }}
                  >
                    Mitologia
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(21);
                    }}
                  >
                    Esportes
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(22);
                    }}
                  >
                    Geografia
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(23);
                    }}
                  >
                    História
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(25);
                    }}
                  >
                    Arte
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(26);
                    }}
                  >
                    Celebridades
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(27);
                    }}
                  >
                    Animais
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(28);
                    }}
                  >
                    Veículos
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(29);
                    }}
                  >
                    Comics
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(30);
                    }}
                  >
                    Gadgets
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(31);
                    }}
                  >
                    Anime e Mangá
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeCategory(32);
                    }}
                  >
                    Desenhos e animações
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br />
              <br />
              <br />
              <Button
                variant="outline-success"
                size="lg"
                disabled={!enableButton}
                onClick={startRound}
              >
                {button}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
