import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./indexpage.js";
import ResultPage from "./resultpage.js";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={IndexPage} />
            <Route path="/results" component={ResultPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
