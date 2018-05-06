import React from "react";
import config from "../../data/SiteConfig";
import VideoChat from "../components/VideoChat/VideoChat";

class videoChatView extends React.Component {
  render() {
    return (
      <div className="index-container">
      <VideoChat></VideoChat>
      </div>
    );
  }
}

export default videoChatView;
