import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../assets/styles";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        { children }
      </>
    </ThemeProvider>
  );
}

export default Theme;
