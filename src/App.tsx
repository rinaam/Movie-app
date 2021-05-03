import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
