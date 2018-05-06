import React, { Component } from "react";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="FriendPage-container" style={{ backgroundColor: "red" }}>
      <About />
      </div>
    );
  }
}

export default AboutPage;
