import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
