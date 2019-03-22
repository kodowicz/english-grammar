import React, { Component } from 'react';
import styled from 'styled-components';




const Text = styled.p`
  color: #B0795A;
  font-weight: 700;
  text-align: center;
`;

const Original = styled.p`
  color: #805A41;
  font-weight: 600;
  text-align: center;
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Question = styled.p`
  color: #563B22;
  font-weight: 600;
  text-align: center;
  width: 100%
`;

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  padding: 10px 30px;
  width: min-content;
  background: #C48B6A;
  box-shadow: 5px 5px 15px #B48970;
  border: none;
  border-radius: 20px;
  margin: 20px 0
`;



const CorrectAnswer = ({ sentenceId, english, id, userAnswer, children }) => {
  return (
    <div>
      {userAnswer &&
        <div>
          <Text>original sentence:</Text>
          <Original>{english}</Original>
        </div>
      }
      {children}
      {userAnswer &&
        <QuestionWrapper>
          <Question>Was your translation approximate enough?</Question>
          <WrongAnswer />
          <GoodAnswer
            // create comperition
            // userAnswer={userAnswer}
            // english={english}
            id={id}
            sentenceId={sentenceId} />
        </QuestionWrapper>
      }
    </div>
  );
};


class WrongAnswer extends Component {
  render() {
    return (
      <Button>Wrong</Button>
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
      <Button onClick={this.handleClick}>Good</Button>
    );
  }
};


export default CorrectAnswer;
