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
                  <h3>O guinas começa a cantar</h3>
                </td>
                <td>
                  <h3>Aparece uma coisa incrível</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Um macaco entra na tela</h3>
                </td>
                <td>
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
