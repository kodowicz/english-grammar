import React from 'react';
import styled from 'styled-components';

const NotFound = () => (
  <Wrapper>
    <Header>Oh no!</Header>
    <Statement>It looks like you're lost amoung sentences.</Statement>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 30vh 0;
  width: 80vw;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.h1`
  font-family: ${({ theme }) => theme.majorFamily};
  font-size: 3rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Statement = styled.p`
  font-family: ${({ theme }) => theme.minorFamily};
  font-size: 1.6rem;
  margin: 0;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default NotFound;
