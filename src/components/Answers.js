import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row } from "react-bootstrap";

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src
    };
  }

  render() {
    const img1 =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/speak-no-evil-monkey_1f64a.png";
    const img2 =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/freezing-face_1f976.png";
    const img3 =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/clown-face_1f921.png";
    const img4 =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/extraterrestrial-alien_1f47d.png";
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h3>O que vai acontecer agora?</h3>
        </Row>
        <Row className="justify-content-md-center">
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>
                  <img src={img1} width="45vw" alt="img1" />
                </td>
                <td className="text-left">
                  <h3>O guinas começa a cantar</h3>
                </td>
                <td>
                  <img src={img2} width="45vw" alt="img1" />
                </td>
                <td className="text-left">
                  <h3>Aparece uma coisa incrível</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img3} width="45vw" alt="img1" />
                </td>
                <td className="text-left">
                  <h3>Um macaco entra na tela</h3>
                </td>
                <td>
                  <img src={img4} width="45vw" alt="img1" />
                </td>
                <td className="text-left">
                  <h3>O Guinas cai de um prédio bem alto</h3>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
