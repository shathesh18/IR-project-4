import React from 'react';
import ReactPlayer from "react-player";
 
function Video() {
  return (
    <div className="App">
      <h3>Embed YouTube video - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://video.twimg.com/amplify_video/1038156949966270466/vid/320x180/YVDYsJTOj2CZT9r2.mp4?tag=8"
      />
    </div>
  );
}
 
export default Video;