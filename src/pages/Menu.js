import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useFetchChapters } from "../hooks";

import MenuList from "../components/MenuList";

const Menu = () => {
  const [chapters, loading, error] = useFetchChapters();

  return (
    <Nav>
      { chapters &&
        <MenuList chapters={chapters} />
      }
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${({ theme }) => theme.white};
  transition: background 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 6rem 2rem;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 7rem 10rem;
  }
`;

export default Menu;
