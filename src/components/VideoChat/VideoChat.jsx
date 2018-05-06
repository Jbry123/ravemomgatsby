import React, { Component } from "react";
import config from "../../../data/SiteConfig";

class VideoChat extends Component {
  render() {
    return (
      <div>
        <iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=12b045a0-429c-4134-ad52-9e814392a67d&room=DEFAULT_ROOM&iframe=true" width="400px" height="520px" allow="microphone; camera" ></iframe>
      </div>
    );
  }
}

export default VideoChat;
