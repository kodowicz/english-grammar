import React from 'react';
import styled from 'styled-components';
import useFetchChapters from '../../hooks/useFetchChapters';

import ChapterList from './ChapterList';

const Menu = () => {
  const { chapters } = useFetchChapters();

  return (
    <Nav>
      { chapters &&
        <ChapterList chapters={chapters} />
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
