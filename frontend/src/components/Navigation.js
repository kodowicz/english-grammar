import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';


const Nav = styled.nav`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  width: 100vw;
  background: #E6B08C;
  height: ${({height}) => height};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #FFE5D5;
  padding: 5px 10px;
  margin: 15px 10px;
`;

const Wrapper = styled.div`
  @media (min-width: 1000px) {
    width: 800px;
  }
`;

const Navigation = (props) => {
  return (
    <Nav height={props.isOpen ? '100vh' : 'auto'}>
      <Button
        onClick={() => props.handleMenu()}>
        menu
      </Button>
      <Wrapper>
        {props.isOpen &&
          <Menu
            titles={props.titles}
            examples={props.examples}
            fetchSentences={props.fetchSentences}
            selectTopic={props.selectTopic}
            refreshPage={props.refreshPage}
            changeTopic={props.changeTopic}
            handleMenu={props.handleMenu}
            handleCheck={props.handleCheck} />
        }
      </Wrapper>
    </Nav>
  )
};


export default Navigation;
