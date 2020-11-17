import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Soft from "./pages/Soft";
import Installation from "./pages/Installation";
import Cloning from "./pages/Cloning";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/software" exact component={Soft} />
        <Route path="/install" exact component={Installation} />
        <Route path="/clone" exact component={Cloning} />
      </Switch>
    </Router>
  );
}

export default App;
