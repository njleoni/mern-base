import React, { useState, useEffect } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Login from "../components/Login/index";
import History from "../utils/history";
import API from "../utils/API";
import NumberFormat from "react-number-format";
import Numeral from "numeral";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

function Card({ question }) {
  const [answers, setAnswers] = useState([]);
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    setCurrentQuestion(question && question[index]);
  }, [question, index]);

  const onAnswer = (event) => {
    setCurrentQuestion(currentQuestion);
    // console.log(currentQuestion);
    if (index <= 15) {
      pushAnswer(currentQuestion);
      setIndex(index + 1);
    } else {
      pushAnswer(currentQuestion);
      // onEnd();
    }
  };

  const onEnd = () => {
    API.saveAnswers({ answers: [answers] });
    History.push("/answers");
    window.location.reload(false);
  };

  const pushAnswer = () => {
    if (currentQuestion.type === "income") {
      setAnswers([
        ...answers,
        {
          category: currentQuestion.category,
          type: currentQuestion.type,
          base: currentQuestion.base,
          rate: value / 100,
          amount: (currentQuestion.base * value) / 100,
        },
      ]);
    } else {
      setAnswers([
        ...answers,
        {
          category: currentQuestion.category,
          type: currentQuestion.type,
          amount: value * 12 * 1000000000,
        },
      ]);
    }
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    newValue = event.currentTarget.value;
    setValue(newValue);
  };

  return (
    <>
      {index <= 15 ? (
        <div className="container">
          <div className="card">
            <div className="question" align="center">
              {currentQuestion && currentQuestion.type === "income" ? (
                <>
                  <p className="category">
                    Tax Bracket: {currentQuestion && currentQuestion.category}
                  </p>
                  {currentQuestion && currentQuestion.returns !== 0 ? (
                    <>
                      <p className="returns">
                        # of Tax Returns:{" "}
                        {Numeral(
                          currentQuestion && currentQuestion.returns
                        ).format("0a")}
                      </p>
                    </>
                  ) : (
                    <> </>
                  )}
                  <p className="returns">
                    Tax Rate:{" "}
                    {currentQuestion && currentQuestion.rate
                      ? `${parseInt(Math.floor(currentQuestion.rate * 100))}%`
                      : console.log("not available")}
                  </p>
                  <p className="returns">
                    Amount of taxes:{" "}
                    {Numeral(currentQuestion && currentQuestion.amount).format(
                      "($ 0.0a)"
                    )}
                  </p>
                  <p className="taxes-paid">What should their tax rate be?</p>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">%</InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                    ></TextField>
                  </form>
                </>
              ) : (
                <>
                  <p className="category">
                    Gov't Spending:{" "}
                    {currentQuestion && currentQuestion.category}
                  </p>

                  <p className="returns">
                    Annual Budget:{" "}
                    {Numeral(currentQuestion && currentQuestion.amount).format(
                      "($ 0.0a)"
                    )}
                  </p>
                  <p className="returns">
                    Monthly Budget:{" "}
                    {Numeral(
                      currentQuestion && currentQuestion.amount / 12
                    ).format("($ 0.0a)")}
                  </p>
                  <p className="taxes-paid">
                    What should the monthly budget be?<br></br>
                    (in billions)
                  </p>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                    ></TextField>
                  </form>
                </>
              )}
              <button id="next" onClick={onAnswer} rate={value}>
                Next Question
              </button>
            </div>
          </div>
          <Divider light />

          <h3
            style={{
              width: "500px",
              color: "white",
              textAlign: "center",
              backgroundColor: "#3e58b6",
              font: "roboto",
              margin: "12px",
              padding: "14px",
            }}
          >
            {currentQuestion && currentQuestion.caption}
          </h3>
        </div>
      ) : (
        <div className="container">
          <div className="card">
            <div className="question" align="center">
              <p>You completed your plan!</p>
              <button id="next" onClick={onEnd}>
                Go to results!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
