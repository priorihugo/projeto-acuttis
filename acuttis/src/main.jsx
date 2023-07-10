import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { BrowserRouter } from "react-router-dom";

//inicializa elemetos do materialize
document.addEventListener("DOMContentLoaded", function () {
  var parallax = document.querySelectorAll(".parallax");
  var parallaxInstances = M.Parallax.init(parallax);

  var modal = document.querySelectorAll(".modal");
  var modalInstances = M.Modal.init(modal);

  console.log('modais ' , modal)
  console.log(modalInstances)

  M.updateTextFields();
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
       <App/>
      </BrowserRouter>
  </React.StrictMode>
);
