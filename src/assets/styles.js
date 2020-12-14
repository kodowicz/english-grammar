import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  scrollThumb: "#292929",
  scrollTrack: "#cacaca",
  white: "#FFFFFF",
  black: "#111111",
  lightGray: "#757575",
  darkGray: "#303030"
};

export const fonts = {
  majorFamily: "'Playfair Display', serif",
  minorFamily: "Montserrat, sans-serif",
  regular: 400,
  medium: 500,
  bold: 600
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.black};
    font-family: ${fonts.majorFamily};
    font-weight: ${fonts.medium};
    margin: 0;
  }

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: ${colors.scrollThumb};
  }

  *::-webkit-scrollbar-thumb {
    background: ${colors.scrollTrack};
  }

  * {
    scrollbar-color: ${colors.scrollTrack} ${colors.scrollThumb};
    scrollbar-width: thin;
  }
`;
