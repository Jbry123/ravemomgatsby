import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./SOSButton.scss";
import FriendBlock from "../FriendBlock/FriendBlock";
import Footer from "../Footer/Footer";

class SOSButton extends Component {
  render() {
    return (
      <div className="SOS-Container">
        <input type="image" src="https://i.imgur.com/ua6Mpfn.png" alt="SOSButton" width="400" height="400"></input>
      </div>
    );
  }
}

export default SOSButton;
