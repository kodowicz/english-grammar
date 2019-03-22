import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';


const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: ${({height}) => height};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #FFE5D5;
  padding: 5px 10px;
  margin: 15px 10px;
`;


const Navigation = ({ titles, isOpen, selectTopic, handleMenu }) => {
  return (
    <Nav height={isOpen ? '100vh' : 'auto'}>
      <Button
        onClick={() => handleMenu()}>
        menu
      </Button>

      {isOpen && <Menu titles={titles} selectTopic={selectTopic} isOpen={isOpen} />}
    </Nav>
  )
};


export default Navigation;
