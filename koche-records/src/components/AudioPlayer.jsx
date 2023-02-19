import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  // audio-player
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const play = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    paddingLeft: 6,
    background: "none",
    border: "1px solid black",
    color: "#000",
  };

  return (
    <>
      <audio src="/music.mp3" id="audio" ref={audioPlayer}></audio>
      <button onClick={togglePlayPause} style={play}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </>
  );
};

export default AudioPlayer;
