import React, { Component } from "react";
import YouTube from "react-youtube";

export default class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src
    };
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1
      }
    };
    return (
      <YouTube videoId={this.state.src} opts={opts} onReady={this._onReady} />
    );
  }
}
