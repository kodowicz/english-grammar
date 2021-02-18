import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from '../components/menu/Menu';
import Learn from '../components/learn/Learn';
import NotFound from '../components/404/NotFound';
import Navigation from '../components/navigation/Navigation';
import StyleTemplate from '../templates/StyleTemplate';

const App = () => (
  <StyleTemplate>
    <BrowserRouter>
      <Route component={Navigation} />
      <Switch>
        <Route path='/' exact component={Menu} />
        <Route path='/chapter/:id' component={Learn} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  </StyleTemplate>
);

export default App;
