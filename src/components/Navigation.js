import React, { useState, useEffect } from "react";
import { Link as LinkElement } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitcher from '../components/ThemeSwitcher';

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

  return (
    <Nav>
      <HomeButton />
      <ThemeSwitcher isHome={isHome} />
    </Nav>
  );
};

const HomeButton = () => (
  <Link aria-role="button" to="/">
    <Svg viewBox="0 0 165 95" xmlns="http://www.w3.org/2000/svg">
      <g>
        <Line x1="4" y1="4" x2="121" y2="4" strokeWidth="8" strokeLinecap="round"/>
        <Line x1="4" y1="47" x2="121" y2="47" strokeWidth="8" strokeLinecap="round"/>
        <Line x1="4" y1="91" x2="121" y2="91" strokeWidth="8" strokeLinecap="round"/>
      </g>
    </Svg>
  </Link>
);

const Nav = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media(min-width: 678px) {
    padding: 2.5rem 4rem;
  }
`;

const Link = styled(LinkElement)`
  background: none;
  border: none;
  display: block;
  padding: 0.5rem;

  &:hover, &:active, &:focus {
    line {
      &:first-child {
        transform: translateX(24%);
      }

      &:last-child {
        transform: translateX(24%);
      }
    }
  }
`;

const Svg = styled.svg`
  width: 2.5rem;
`;

const Line = styled.line`
  stroke: ${({ theme }) => theme.black};
  transition: transform 0.3s;
`;

export default Navigation;
