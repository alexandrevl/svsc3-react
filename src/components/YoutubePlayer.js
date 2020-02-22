import React, { Component } from "react";
import YouTube from "react-youtube";

export default class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: this.props.gameSettings
    };
    //console.log(this.state.gameSettings);
  }
  componentWillUpdate(data) {
    // console.log("X");
    // console.log(this.state.gameSettings);
    // console.log(data.gameSettings);
    if (this.state.gameSettings.question.id !== data.gameSettings.question.id) {
      //console.log(data);
      this.setState({
        gameSettings: data.gameSettings
      });
    }
  }

  render() {
    const opts = {
      height: "450",
      width: "800",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1
      }
    };
    return (
      <div>
        <YouTube
          videoId={this.state.gameSettings.question.idVideo}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}
