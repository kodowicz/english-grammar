import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import MainContainer from './MainContainer';
import StartPageContainer from './StartPageContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E6B08C;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

    body::-webkit-scrollbar {
      width: 10px
    }
    body::-webkit-scrollbar-track {

    }
    body::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,.5);
      border-radius: 10px
    }


  }
`





const store = createStore(reducers, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <div>
          <StartPageContainer />
          <MainContainer />
        </div>
      </Provider>
    );
  }
};

export default App;
