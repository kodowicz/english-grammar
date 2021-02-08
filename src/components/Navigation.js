import React, { useState, useEffect } from "react";
import { Link as LinkElement } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ location }) => {
  const [isHome, setHome] = useState(true);
  const reg = /^\/$/;

  useEffect(
    () => {
      const isHome = reg.test(location.pathname);
      setHome(isHome);
    },
    [location]
  );

  return isHome ? (
    <></>
  ) : (
    <Link to="/">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 100 100"
      >
        <Path d="M5,50 L95,50 M3,50 L19,34 M3,50 L19,66" />
      </Svg>
    </Link>
  );
};

const Link = styled(LinkElement)`
  position: fixed;
  top: 2.5rem;
  left: 2.5rem;
  background: none;
  border: none;
  z-index: 3;

  @media (min-width: 768px) {
    top: 4rem;
    left: 4rem;
  }
`;

const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

const Path = styled.path`
  stroke: #111;
  fill: none;
  stroke-width: 7;
  stroke-linecap: round;
`;

export default Navigation;
