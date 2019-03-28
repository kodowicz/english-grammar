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

  @media (min-width: 1000px) {
    margin-bottom: 30px
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Question = styled.p`
  color: #563B22;
  font-weight: 600;
  text-align: center;
  margin: 40px auto 20px;
  width: 60%;

  @media (min-width: 1000px) {
    margin-bottom: 30px;
  }
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
`;



const CorrectAnswer = ({ sentenceId, english, id, refresh, userAnswer, handleCheck, refreshPage, children }) => {
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
        <div>
          <Question>Was your translation approximate enough?</Question>
          <QuestionWrapper>
          <WrongAnswer
            handleCheck={handleCheck}
            refreshPage={refreshPage} />
          <GoodAnswer
            // create comperition
            // userAnswer={userAnswer}
            // english={english}
            id={id}
            sentenceId={sentenceId}
            handleCheck={handleCheck}
            refreshPage={refreshPage} />
        </QuestionWrapper>
      </div>
      }
    </div>
  );
};


class WrongAnswer extends Component {
  handleClick = () => {
    this.props.refreshPage(false);
    this.props.handleCheck('');
  }

  render() {
    return (
      <Button onClick={this.handleClick}>Wrong</Button>
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

    this.props.refreshPage(false);
    this.props.handleCheck('');
  }

  render() {
    return (
      <Button onClick={this.handleClick}>Good</Button>
    );
  }
};


export default CorrectAnswer;
