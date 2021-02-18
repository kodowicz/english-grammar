import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.majorFamily};
    font-weight: ${({ theme }) => theme.medium};
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.darkGray};
    transition: background 0.5s;
    margin: 0;
  }

  button {
    border: none;
    background: none;
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

export default GlobalStyle;
