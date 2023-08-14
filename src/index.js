import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById("root"));

const eleement = (
  <div>
<BrowserRouter>
    <App></App>
</BrowserRouter>
  </div>
);
root.render(eleement);
