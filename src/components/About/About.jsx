import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";
import FriendBlock from "../FriendBlock/FriendBlock";

class About extends Component {
  render() {
    return (
      <div className="FriendPage-container" style={{ backgroundColor: "#D90368" }}>
      <div>
        <img src="https://i.imgur.com/GrciIIj.png" alt="" height="70" width="400"/>
      </div>
        <h3>Keep The Party Going!</h3>
        <nav>
          <ul>
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />
            <FriendBlock />

          </ul>
        </nav>
      </div>
    );
  }
}

export default About;
