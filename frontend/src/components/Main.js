import React, { Component } from 'react';
import Sentences from './Sentences';

class Main extends Component {
  componentDidMount() {
    this.props.fetchSentences(this.props.id);
  }

  render() {
    const { topic, sentences, isChecked, handleCheck } = this.props;
    return (
      <div style={{background: '#E6B08C'}}>
        <Title topic={topic} />
        {sentences ?
        <Sentences
          sentences={sentences}
          isChecked={isChecked}
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
