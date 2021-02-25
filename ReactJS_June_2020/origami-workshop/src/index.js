import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/config/config";
import Navigation from "./navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
