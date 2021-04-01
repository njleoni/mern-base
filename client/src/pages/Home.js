import React from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import PiggyBankBtn from "../images/PiggyBankBtn.png";
import Guy from "../images/Guy.png";
import "./App.css";
import History from "../utils/history";

function Home() {
  const reRoute = () => {
    History.push("/questions");
    window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={USPB_LOGO} alt="Uncle Sam's Piggy Bank Logo" />
      </div>
      <div className="message">
        <h2 align="center">Uncle Sam's Piggy Bank is broken!</h2>
        <h2>Open the piggy bank below to fix it!</h2>

        <div className="guy">
          <img src={Guy} alt="Monopoly Guy"></img>
        </div>
      </div>
      <button id="play">
        <img src={PiggyBankBtn} onClick={reRoute} />
      </button>
    </div>
  );
}

export default Home;
