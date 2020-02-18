import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ProgressBar, Container, Row, Col } from "react-bootstrap";

export default class EnergyBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: this.props.now
    };
  }
  render() {
    return <ProgressBar animated variant="success" now={this.state.now} />;
  }
}
