import React, { useEffect, useContext, useState } from "react";
import SocketContext from "./SocketContext";

export default function Phrases() {
  const socket = useContext(SocketContext);
  const [phrase, setPhrase] = useState({
    text: "",
    author: "",
    time: 0
  });
  socket.on("phrase", phrase => {
    setPhrase(phrase);
  });
  useEffect(() => {
    let now = Date.now();
    if (now - phrase.time > 60000) {
      phrase.time = Date.now();
      socket.emit("getPhrase");
    }
  });
  return (
    <div>
      <h5>
        <i>{phrase.text}</i>
      </h5>
      <br />
      <h6>
        <i>{phrase.author}</i>
      </h6>
    </div>
  );
}
