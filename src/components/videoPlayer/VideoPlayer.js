import React from "react";
const VideoLink = {
  url: "https://www.youtube.com/embed/AkMIwNpK5jQ",
  videoName:
    "Responsive Dropdown Navigation Menu using HTML CSS and JavaScript",
  hachtag: "JavaScript Projects",
};

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        style={{ width: "1000px", height: "600px" }}
        src={VideoLink.url}
        frameborder="0"
      />

      <h6 style={{ color: "blue", fontSize: "13px" }}>#{VideoLink.hachtag}</h6>
      <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
        {VideoLink.videoName}
      </h3>
    </div>
  );
};

export default VideoPlayer;
