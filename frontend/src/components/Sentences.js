import React, { Component } from 'react';
import styled from 'styled-components';
import CorrectAnswer from './CorrectAnswer';
import UserAnswer from './UserAnswer';


const Sentence = styled.p`
  margin-bottom: 50px;
  margin-top: ${({margin}) => margin ? '50px' : '85px'};
  color: #805A41;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;




class Sentences extends Component {
  state = {
    sentence: null
  }

  componentDidMount() {
    this.setState({
      sentence: this.randomSentence(this.props.sentences)
    })
  }

  randomSentence(array) {
    if (array !== undefined) {
      const random = Math.round(Math.random() * array.length);
      return array[random];
    } else {
      return ''
    }
  }

  render() {
    return (
      <>
        {this.state.sentence &&
          <>
            <PolishSentence polish={this.state.sentence.polish} />
            <CorrectAnswer
              sentenceId={this.state.sentence.sentenceId}
              english={this.state.sentence.english}
              id={this.props.id}
              refresh={this.props.refresh}
              userAnswer={this.props.userAnswer}
              handleCheck={this.props.handleCheck}
              refreshPage={this.props.refreshPage}>
              <UserAnswer handleCheck={this.props.handleCheck} />
            </CorrectAnswer>
          </>
        }
      </>
    );
  }
}


const PolishSentence = ({ polish }) => (
  <Sentence margin={false} lang="pl">{polish}</Sentence>
);


export default Sentences;
