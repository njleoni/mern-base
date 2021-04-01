import API from "../utils/API";
import React, { useState, useEffect } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Grid from "../components/grid";
import Login from "../components/Login";
import Logout from "../components/Logout";
import "./App.css";

function Answer() {
  const [answer, setAnswer] = useState([]);
  const [id, setID] = useState()

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    API.getLastAnswer()
      .then((res) => {
        setAnswer(res.data[0].answers[0]);
        setID(res.data[0]._id);
        console.log(res.data[0]._id);
      })

      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="logo">
        <img
          src={USPB_LOGO}
          alt="Uncle Sam's Piggy Bank Logo"
          className="Qlogo"
        />
      </div>
      <div>
        <Grid answer={answer}/>
        <Login id={id}/>
        <Logout />
      </div>
    </div>
  );
}

export default Answer;
