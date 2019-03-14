import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import Menu from './Menu';
import Main from './Main';
import StartPage from './StartPage';


const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={StartPage} />
            <Route path="/topic" component={Menu} />
            <Route path="/topic" component={Main} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
