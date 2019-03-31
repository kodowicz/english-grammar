import React, { Component } from 'react';
import Task from './Task';


class Main extends Component {
  componentDidUpdate() {
    this.props.refreshPage(true);
    this.props.changeTopic(true);
  }

  render() {
    const { topic, id, sentences, refresh, topicChanged, examples, userAnswer, fetchSentences, fetchExamples, refreshPage, handleCheck } = this.props;
    return (
      <>
        {topicChanged &&
          <Task
            topic={topic}
            sentences={sentences}
            id={id}
            refresh={refresh}
            examples={examples}
            userAnswer={userAnswer}
            fetchSentences={fetchSentences}
            fetchExamples={fetchExamples}
            refreshPage={refreshPage}
            handleCheck={handleCheck}
          />
        }
      </>
    )
  }
}


export default Main;
