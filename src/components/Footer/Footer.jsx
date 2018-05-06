import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return(
    <div class="navbar">
    <a href="/UserView" class="active">Friends</a>
    <a href="/about">Plurtify!</a>
    <a href="/SOSView">Contact</a>
  </div>
    );
  }
}

export default Footer;
