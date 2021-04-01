import React from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Login from "../components/Login";
import Logout from "../components/Logout";

function Results() {
  return (
    <div className="container">
      <div className="logo">
        <img src={USPB_LOGO} alt="Uncle Sam's Piggy Bank Logo" />
      </div>
      <Login />
      <Logout />
    </div>
  );
}

export default Results;
