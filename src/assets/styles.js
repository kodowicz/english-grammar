import styled, { createGlobalStyle } from "styled-components";

const fonts = {
  majorFamily: "'Playfair Display', serif",
  minorFamily: "Montserrat, sans-serif",
  regular: 400,
  medium: 500,
  bold: 600
};

export const lightTheme = {
  scrollThumb: "#cacaca",
  scrollTrack: "#303030",
  white: "#FFFFFF",
  black: "#111111",
  lightGray: "#757575",
  darkGray: "#303030",
  ...fonts
};

export const darkTheme = {
  scrollThumb: "#303030",
  scrollTrack: "#cacaca",
  white: "#111111",
  black: "#FFFFFF",
  lightGray: "#999999",
  darkGray: "#FFFFFF",
  ...fonts
};


export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    font-family: ${({ theme }) => theme.majorFamily};
    font-weight: ${({ theme }) => theme.medium};
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.darkGray};
    transition: background 0.5s;
    margin: 0;
  }

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollThumb};
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollTrack};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color:
      ${({ theme }) => theme.scrollTrack}
      ${({ theme }) => theme.scrollThumb};
  }
`;

export const Button = styled.button`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  font-family: ${({ theme }) => theme.minorFamily};
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  margin: 0 auto;
  padding: 1rem 4rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 5rem;

  @media (min-width: 768px) {
    padding: 1rem 5rem;
    font-size: 1.6rem;
  }
`;
