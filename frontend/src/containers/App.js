import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import MainContainer from './MainContainer';
import StartPageContainer from './StartPageContainer';

const store = createStore(reducers, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <StartPageContainer />
          <MainContainer />
        </div>
      </Provider>
    );
  }
};

export default App;
