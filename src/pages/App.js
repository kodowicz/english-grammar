import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../components/Menu";
import Navigation from "../pages/Navigation";
import LearnPage from "../pages/LearnPage";

const App = () => (
  <BrowserRouter>
    <Route component={Navigation} />
    <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/chapter/:id" component={LearnPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
