import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/App.js";
import Chapters from "./pages/Chapters";
import Series from "./pages/Series";
import Serie from "./pages/Serie";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/series">
      <Series />
    </Route>
    <Route exact path="/chapters">
      <Chapters />
    </Route>
    <Switch>
      <Route path="/serie/:id" children={<Serie />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
