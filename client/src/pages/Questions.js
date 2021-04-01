import React, { useEffect, useState } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Card from "../components/Card";
import "./App.css";
import API from "../utils/API";
import Login from "../components/Login/index";
import History from "../utils/history";

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    API.getAllTax()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          src={USPB_LOGO}
          className="Qlogo"
          alt="Uncle Sam's Piggy Bank Logo"
          align="center"
        />
      </div>

      <div>
        <Card question={questions} />
      </div>
    </div>
  );
}

export default Question;
