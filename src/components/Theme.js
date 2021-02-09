import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme, GlobalStyle } from "../assets/styles";

const Theme = ({ children }) => {
  const { isLight } = useSelector(state => ({
    isLight: state.theme.isLight
  }));

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        { children }
      </>
    </ThemeProvider>
  );
}

export default Theme;
