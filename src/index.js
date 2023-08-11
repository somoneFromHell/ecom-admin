import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById("root"));

const eleement = (
  <div>
    <App></App>
  </div>
);
root.render(eleement);
