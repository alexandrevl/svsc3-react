import React, { Component } from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src
    };
  }

  render() {
    return <FontAwesomeIcon icon={faCog} />;
  }
}
