import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Soft from "./pages/Soft";
import Installation from "./pages/Installation";
import Cloning from "./pages/Cloning";
import Solution from "./pages/Solution";
import Project from "./pages/Project";
import Thinking from "./pages/Thinking";
import Objects from "./pages/Objects";
import Properties from "./pages/Properties";
import Methods from "./pages/Methods";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/software" exact component={Soft} />
        <Route path="/install" exact component={Installation} />
        <Route path="/clone" exact component={Cloning} />
        <Route path="/solution" exact component={Solution} />
        <Route path="/project" exact component={Project} />
        <Route path="/thinking" exact component={Thinking} />
        <Route path="/objects" exact component={Objects} />
        <Route path="/properties" exact component={Properties} />
        <Route path="/methods" exact component={Methods} />
      </Switch>
    </Router>
  );
}

export default App;
