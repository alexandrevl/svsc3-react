import React, { useContext, useState } from "react";
import GameContext from "./GameContext.js";
import YoutubePlayer from "./YoutubePlayer.js";
import { Image } from "react-bootstrap";

export default function Media() {
  const gameSettings = useContext(GameContext);
  const [styleYT] = useState({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "..",
    height: ".."
  });
  const [styleImg] = useState({
    maxHeight: "400px"
  });
  if (gameSettings.question.idVideo) {
    return <YoutubePlayer gameSettings={gameSettings} style={styleYT} />;
  }
  if (gameSettings.question.imgSrc) {
    return <Image src={gameSettings.question.imgSrc} style={styleImg} fuild />;
  }
}
