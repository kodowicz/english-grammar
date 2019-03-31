import React, { Component } from 'react';
import styled from 'styled-components';
import Sentences from './Sentences';


const Wrapper = styled.div`
  width: 88vw;
  margin: 0 auto;
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


class Task extends Component {
  componentDidMount() {
    this.props.fetchSentences(this.props.id);
    this.props.fetchExamples();
  }

  componentWillUnmount() {
    this.props.fetchSentences(null);
  }
  // componentDidUpdate() {
  //   this.props.refreshPage(true);
  //   this.props.changeTopic(true);
  // }

  render() {
    const { topic, id, sentences, refresh, examples, userAnswer, fetchSentences, fetchExamples, refreshPage, handleCheck } = this.props;
    return (
      <Wrapper>
        {sentences && refresh &&
          <div>
            <Title topic={topic} />
            <Sentences
              sentences={sentences}
              id={id}
              refresh={refresh}
              examples={examples}
              userAnswer={userAnswer}
              fetchSentences={fetchSentences}
              fetchExamples={fetchExamples}
              refreshPage={refreshPage}
              handleCheck={handleCheck} />
          </div>
        }
      </Wrapper>
    )
  }
}


const Title = ({ topic }) => (
  <Topic>{topic}</Topic>
);

export default Task;
