import styled, { keyframes } from "styled-components";

export const sunrise = keyframes`
  from {
    transform: rotate(0deg) translateX(0%) rotate(0deg);
  }

  to {
    transform: rotate(30deg) translateX(25%) rotate(-30deg);
  }
`;

export const sunset = keyframes`
  from {
    transform: rotate(30deg) translateX(25%) rotate(-30deg);
  }

  to {
    transform: rotate(0deg) translateX(0%) rotate(0deg);
  }
`;

export const fadeIn =  (start, end) => keyframes`
  from {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 0;
    transform: translate3d(0, ${start}, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, ${end}, 0);
  }
`;

export const moveUp = keyframes`
  from {
    transform: translate3d(0, 15vh, 0);
    opacity: 1;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2rem, 0);
  }
`;
