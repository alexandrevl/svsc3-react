import React, { useEffect, useState } from "react";
import trilha1 from "./../sounds/Trilha-1.mp3";
import trilha2 from "./../sounds/Trilha-2.mp3";
import trilha3 from "./../sounds/Trilha-3.mp3";
import trilha4 from "./../sounds/Trilha-4.mp3";
import trilha5 from "./../sounds/Trilha-5.mp3";
import trilha6 from "./../sounds/Trilha-6.mp3";
import trilha7 from "./../sounds/Trilha-7.mp3";
import trilha8 from "./../sounds/Trilha-8.mp3";
import trilha9 from "./../sounds/Trilha-9.mp3";
import trilha10 from "./../sounds/Trilha-10.mp3";
import trilha11 from "./../sounds/Trilha-11.mp3";
import trilha12 from "./../sounds/Trilha-12.mp3";

export default function Sounds() {
  const [audioTrilha, setAudioTrilha] = useState(trilha1);
  function getRandomInt(min, max) {
    //console.log(min,max);
    if (Math.ceil(min) === Math.floor(max)) {
      return min;
    } else {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  useEffect(() => {
    let randomTrilha = getRandomInt(1, 12);
    switch (randomTrilha) {
      case 1:
        setAudioTrilha(trilha1);
        break;
      case 2:
        setAudioTrilha(trilha2);
        break;
      case 3:
        setAudioTrilha(trilha3);
        break;
      case 4:
        setAudioTrilha(trilha4);
        break;
      case 5:
        setAudioTrilha(trilha5);
        break;
      case 6:
        setAudioTrilha(trilha6);
        break;
      case 7:
        setAudioTrilha(trilha7);
        break;
      case 8:
        setAudioTrilha(trilha8);
        break;
      case 9:
        setAudioTrilha(trilha9);
        break;
      case 10:
        setAudioTrilha(trilha10);
        break;
      case 11:
        setAudioTrilha(trilha11);
        break;
      case 12:
        setAudioTrilha(trilha12);
        break;

      default:
        break;
    }
  }, []);
  return <audio src={audioTrilha} volume="0.8" loop autoPlay />;
}
