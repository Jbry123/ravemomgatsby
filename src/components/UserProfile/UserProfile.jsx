import React, { Component } from "react";
import './UserProfile.scss';

class UserProfile extends Component {
  render() {

    return (
<div className="UserProfile-Container">
<img className="Profile-pic"src="https://i.imgur.com/yZdQCsr.png" height="100" width="100" />

<h4 className="Userh4">RaveMomma
  <p>First encounter: You met RaveMomma at EDC!</p>
</h4>
<div className="UserIcon-wrapper">
  <img className="Icon-pic" src="http://www.clker.com/cliparts/H/i/N/V/m/o/plus-sign-hi.png" alt="" height="31" width="30"/>
  <img className="Icon-pic" src="http://simpleicon.com/wp-content/uploads/bluetooth.png" alt="" height="32" width="35"/>
</div>
</div>
       
      );
    }
  }
  export default UserProfile;
  