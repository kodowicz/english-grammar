import React, { Component } from 'react';
import styled from 'styled-components';
import Sentences from './Sentences';


const Wrapper = styled.div`
  width: 88vw;
  margin: 0 auto;

  ${'' /* @media (min-width: 1000px) {
    width: 40vw;
    max-width: 500px */}
  }
`;

const Topic = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #FFE5D5;
  margin: 100px auto 0;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 36px;
    max-width: 800px
  }
`;


class Main extends Component {
  componentDidMount() {
    this.props.fetchSentences(this.props.id);
    this.props.fetchAllExamples();
  }

  componentDidUpdate() {
    this.props.refreshPage(true)
  }

  render() {
    const { topic, id, sentences, refresh, userAnswer, refreshPage, handleCheck } = this.props;
    return (
      <Wrapper>
        <Title topic={topic} />
        {sentences && refresh ?
        <Sentences
          sentences={sentences}
          id={id}
          refresh={refresh}
          userAnswer={userAnswer}
          refreshPage={refreshPage}
          handleCheck={handleCheck} /> : null
        }
      </Wrapper>
    )
  }
}


const Title = ({ topic }) => (
  <Topic>{topic}</Topic>
);

export default Main;
