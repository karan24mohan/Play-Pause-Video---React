import React, { useRef } from "react";

function VideoPlayPause() {
  const video = useRef();

  const Play = () => {
    video.current.play();
  };

  const Pause = () => {
    video.current.pause();
  };

  return (
    <>
      <div className="btn">
        <button className="play" onClick={Play}>
          Play
        </button>
        <button className="pause" onClick={Pause}>
          Pause
        </button>
      </div>
      <video width="600px" height="300px" ref={video}>
        <source src="/Videos/Drake.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default VideoPlayPause;
