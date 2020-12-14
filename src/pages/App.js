import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../components/Menu";
import Navigation from "../pages/Navigation";
import LearnPage from "../pages/LearnPage";
import { GlobalStyle } from "../assets/styles";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route component={Navigation} />
    <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/chapter/:id" component={LearnPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
