import React, { Component } from "react";
import YouTube from "react-youtube";

export default class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings
    };
  }
  componentWillUpdate(data) {
    //console.log(this.state.gameSettings);
    //console.log(data.gameSettings);
    if (this.state.gameSettings.question.id !== data.gameSettings.question.id) {
      //console.log(data);
      this.setState({
        gameSettings: data.gameSettings
      });
    }
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
      <YouTube
        videoId={this.state.gameSettings.question.idVideo}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}
