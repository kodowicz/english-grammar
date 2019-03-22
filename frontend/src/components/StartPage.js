import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  padding: 7vh 0;
`;

const Topic = styled.h1`
  font-weight: 700;
  color: #FFFFFF;
  font-size: 33px;
  margin: 0 0 35px;
  text-align: center;
`

const List = styled.ul`
  color: #FFE5D5;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 15px 25px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  // align-items: center;
`;

const Title = styled.span`
  width: 85%
`;


class StartPage extends Component {
  componentDidMount() {
    this.props.fetchTitles();
  }

  render() {
    const { titles, examples, selectTopic, closeStartPage } = this.props;
    return (
      <Wrapper>
        <Topic>Choose topic to practice</Topic>
        {<Menu titles={titles} selectTopic={selectTopic} closeStartPage={closeStartPage} />}
      </Wrapper>
    );
  }
}


const Menu = ({ titles, selectTopic, closeStartPage }) => {
  return (
    <List>
      {titles.map(title =>
        <ListItem
          key={title.id}
          onClick={() => {
            selectTopic(title.id);
            closeStartPage()
          }}
          >
            <Title>{title.topic}</Title>
            <span>0%</span>
        </ListItem>
      )}
    </List>
  )
};



export default StartPage;
