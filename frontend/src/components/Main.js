import React, { Component } from 'react';
import Sentences from './Sentences';

class Main extends Component {
  componentDidMount() {
    this.props.fetchSentences(this.props.id);
    this.props.fetchAllExamples();
  }

  render() {
    const { topic, sentences, id, userAnswer, handleCheck } = this.props;
    return (
      <div style={{background: '#E6B08C'}}>
        <Title topic={topic} />
        {sentences ?
        <Sentences
          sentences={sentences}
          id={id}
          userAnswer={userAnswer}
          handleCheck={handleCheck} /> : null
        }
      </div>
    )
  }
}


const Title = ({ topic }) => (
  <h1>{topic}</h1>
);

export default Main;
