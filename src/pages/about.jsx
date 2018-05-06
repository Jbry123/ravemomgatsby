import React, { Component } from "react";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Mapbox from "../components/Mapbox/Mapbox";

class AboutPage extends Component {
  render() {
    return (
      <div className="FriendPage-container" style={{ backgroundColor: "red" }}>
      <About />
      <Mapbox />
      </div>
    );
  }
}

export default AboutPage;
