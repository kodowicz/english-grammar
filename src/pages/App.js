import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./Menu";
import LearnPage from "./LearnPage";
import Theme from "../components/Theme";
import Navigation from "../components/Navigation";

const App = () => (
  <BrowserRouter>
    <Theme>
      <Route component={Navigation} />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/chapter/:id" component={LearnPage} />
      </Switch>
    </Theme>
  </BrowserRouter>
);

export default App;
