import React from "react";
import PiggyBankBtn from "../../images/PiggyBankBtn.png";
import History from "../utils/history";

function Button() {
  const clickAction = () => {
    History.push("/login");
  };

  return (
    <>
      <button id="play">
        <img src={PiggyBankBtn} />
      </button>
    </>
  );
}

export default Button;
