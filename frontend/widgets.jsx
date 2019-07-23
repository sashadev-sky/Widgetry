import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";

import "./css/reset.css";
import "./css/index.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root />, root);
});
