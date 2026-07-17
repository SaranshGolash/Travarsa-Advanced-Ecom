import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import "@fontsource/kurale";
import "@fontsource/league-spartan";
import "@fontsource/raleway";
import "@fontsource/bebas-neue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
