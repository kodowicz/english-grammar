import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Switcher from './Switcher';
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

const Navigation = () => {
  const [isHome, setHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(
    () => {
      const reg = /^\/$/;
      const isHome = reg.test(location.pathname);
      setHome(isHome);
    },
    [location]
  );

  function changeLocation () {
    if (isHome) {
      history.goForward();
    } else {
      history.goBack();
    }
  };

  return (
    <Nav>
      <HomeButton onClick={changeLocation}>
        <MenuSvg />
      </HomeButton>
      <Switcher isHome={isHome} />
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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

const HomeButton = styled.button`
  background: none;
  border: none;
  display: block;
  padding: 0.5rem;

  svg {
    width: 2.5rem;
  }

  line {
    stroke: ${({ theme }) => theme.black};
    transition: transform 0.3s;
  }

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

export default Navigation;
