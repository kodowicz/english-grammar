import React, { Component } from 'react';

const CorrectAnswer = ({ sentenceId, english, id, userAnswer, children }) => {
  return (
    <div>
      {userAnswer &&
        <div>
          <p>original sentence:</p>
          <p>{english}</p>
        </div>
      }
      {children}
      {userAnswer &&
        <div>
          <WrongAnswer />
          <GoodAnswer
            // create comperition
            // userAnswer={userAnswer}
            // english={english}
            id={id}
            sentenceId={sentenceId} />
        </div>
      }
    </div>
  );
};


class WrongAnswer extends Component {
  render() {
    return (
      <button>Wrong</button>
    );
  }
};




class GoodAnswer extends Component {
  handleClick = () => {
    let goodAnswers = JSON.parse(window.localStorage.getItem(this.props.id)) || [];
    let allGoodAnswers = JSON.parse(window.localStorage.getItem('allExamples'));

    let topic = allGoodAnswers.find(topic => topic.id === this.props.id);
    topic.examples.push(this.props.sentenceId);
    goodAnswers.push(this.props.sentenceId);

    window.localStorage.setItem('allExamples', JSON.stringify(allGoodAnswers));
    window.localStorage.setItem(this.props.id, JSON.stringify(goodAnswers));
  }

  render() {
    return (
      <button onClick={this.handleClick}>Good</button>
    );
  }
};


export default CorrectAnswer;
