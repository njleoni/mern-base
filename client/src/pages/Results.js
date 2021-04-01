import React, { useState, useEffect } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import DataTable from "../components/DataTable";
import "./App.css";
import API from "../utils/API";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadResults();
  }, []);

  function loadResults() {
    API.getResults()
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
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
        <DataTable results={results} />
      </div>
    </div>
  );
}

export default Results;
