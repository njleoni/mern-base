import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Save from "./pages/Save";
import Answer from "./pages/Answer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/answer" component={Answer} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/save" component={Save} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/answers" component={Answer} />
      </div>
    </Router>
  );
}

export default App;
