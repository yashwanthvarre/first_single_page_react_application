import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import Roster from "./Roster";
// import Schedule from "./Schedule";
import Nav from "./nav.js"


import { Component } from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";





// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" exact={true} component={Blog1} />
      <Route path="/schedule" exact={true} component={Blog2} />
      <Route path="/clustering" exact={true} component={Blog3} />
    </Switch>
  </main>
);


export default Main;
