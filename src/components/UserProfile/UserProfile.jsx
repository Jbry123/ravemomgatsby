import React, { Component } from "react";
import './UserProfile.scss';

class UserProfile extends Component {
  render() {

    return (
<div className="FriendBlock-Container">
<img className="Profile-pic"src="https://i.imgur.com/yZdQCsr.png" height="100" width="100" />

<h4>RaveMomma
  <p>new message(1):Hey it was great meeting you!</p>
</h4>
<div className="Icon-wrapper">
  <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30"/>
  <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35"/>
</div>
</div>
       
      );
    }
  }
  export default UserProfile;
  