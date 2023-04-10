import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "./Video.scss";
// import jap from "../img/jap.mp4";

export default function Video(props) {
  const playerRef = useRef(null);
  console.log(props);
  // funzione che viene chiamata quando il video finisce
  const handleEnded = () => {
    playerRef.current.seekTo(0); // torna all'inizio del video
  };

  return (
    <div className="video">
      <ReactPlayer
        className="video_container"
        ref={playerRef}
        url={props.video}
        playing={true}
        loop={false}
        controls={true}
        onEnded={handleEnded}
      />
    </div>
  );
}
