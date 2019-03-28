import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';



const Wrapper = styled.div`
  padding: 7vh 0;

  @media (min-width: 1000px) {
    width: 800px;
    margin: 0 auto
  }
`;

const Topic = styled.h1`
  font-weight: 700;
  color: #FFFFFF;
  font-size: 33px;
  margin: 0 0 35px;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 45px;
    margin-bottom: 50px
  }
`

class StartPage extends Component {
  componentDidMount() {
    this.props.fetchTitles();
    this.props.fetchExamples();
  }

  render() {
    const { titles, examples, selectTopic, closeStartPage } = this.props;
    return (
      <Wrapper>
        <Topic>Choose topic to practice</Topic>
        <Menu titles={titles} selectTopic={selectTopic} closeStartPage={closeStartPage} examples={examples} />
      </Wrapper>
    );
  }
}

export default StartPage;
