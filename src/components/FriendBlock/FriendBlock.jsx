import React, { Component } from "react";
import './FriendBlock.scss';

class FriendBlock extends Component {
  render() {
    //     var Chance = require('chance');
    const friendNames = ['Pikachu', 'Ekans', 'Polywhirl', 'Ashe', 'Brock', 'Liz', 'Lil'];
    //     let friendName = '';
    // function randomFriendName() {
    //   for(let i=0; i < i + 1; i++) {
    //     return
    //   }
    // }
    return (
      <div>
        <div className="FriendBlock-Container">
          <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

          <h4>{friendNames[0]}
                    </h4>
          <div className="Icon-wrapper">
            <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
            <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
          </div>
        </div>
        <div className="FriendBlock-Container">
          <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

          <h4>{friendNames[2]}
          </h4>
          <div className="Icon-wrapper">
            <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
            <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
          </div>
        </div>
      </div>

      /* <div className="FriendBlock-Container">
        <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

        <h4>{friendNames[2]}
        </h4>
        <div className="Icon-wrapper">
          <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
          <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
        </div>
      </div>
      <div className="FriendBlock-Container">
        <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

        <h2>{friendNames[3]}
        </h2>
        <div className="Icon-wrapper">
          <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
          <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
        </div>
      </div>
      <div className="FriendBlock-Container">
        <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

        <h2>{friendNames[4]}
        </h2>
        <div className="Icon-wrapper">
          <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
          <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
        </div>
      </div>
      <div className="FriendBlock-Container">
        <img className="Profile-pic" src="https://i.imgur.com/yZdQCsr.png" height="40" width="40" />

        <h2>{friendNames[5]}
        </h2>
        <div className="Icon-wrapper">
          <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30" />
          <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35" />
        </div>
      </div>
    </div> */

    );
  }
}
export default FriendBlock;

///////////// friend icons ////////////
// <img src="https://i.imgur.com/yZdQCsr.png" height="50" width="50">
// <img src="https://i.imgur.com/FuLtpZm.jpg" height="50" width="50">
// <img src="https://i.imgur.com/CljgGP6.png" height="50" width="50">
// <img src="https://i.imgur.com/izQ9Tbr.png" height="50" width="50">
// <img src="https://i.imgur.com/C1QuT6D.png" height="50" width="50">

