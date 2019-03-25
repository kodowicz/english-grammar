import React, { Component } from 'react';
import styled from 'styled-components';
import Sentences from './Sentences';


const Wrapper = styled.div`
  padding: 0 12vw;
`;

const Topic = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #FFE5D5;
  margin: 100px 0 0;
  text-align: center;
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
