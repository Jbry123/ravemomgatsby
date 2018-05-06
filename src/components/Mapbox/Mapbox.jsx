import React, { Component } from "react";
// import './Mapbox.scss';
class Mapbox extends Component {
  render() {
    return (
        <head>
          <div>
            <meta charset='utf-8' />
            <title>Hello</title>
            <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
            <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.js'></script>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css' rel='stylesheet' />
          </div>
        </head>
    );
  }
}

export default Mapbox;

