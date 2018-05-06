import React, { Component } from "react";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import FriendBlock from "../components/FriendBlock/FriendBlock";
import UserProfile from "../components/UserProfile/UserProfile";

class AboutPage extends Component {
  render() {
    return (
      <div className="FriendPage-container" style={{ backgroundColor: "red" }}>
      <UserProfile width='400' height='300'></UserProfile>
      </div>
    );
  }
}

export default AboutPage;
