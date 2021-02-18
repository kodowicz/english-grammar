import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyle from '../styles/globals';
import { lightTheme, darkTheme } from '../styles/theme';

const StyleTemplate = ({ children }) => {
  const { isLight } = useSelector(state => ({
    isLight: state.theme.isLight
  }));

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
}

export default StyleTemplate;
