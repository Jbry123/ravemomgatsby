import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SOSButton from "../components/SOSButton/SOSButton";
import Footer from "../components/Footer/Footer";

class SOSView extends React.Component {
  render() {
    return (
      <div className="index-container">
        <SOSButton></SOSButton>
        
        <Footer></Footer>
      </div>

    );
  }
}

export default SOSView;
