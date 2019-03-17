import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer';
import UserAnswer from './UserAnswer';



class Sentences extends Component {
  state = {
    sentence: null
  }

  componentDidMount() {
    console.log('mounted');
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
            <CorrectAnswer english={this.state.sentence.english} isChecked={this.props.isChecked}>
              <UserAnswer handleCheck={this.props.handleCheck} />
            </CorrectAnswer>
          </>
        }
      </>
    );
  }
}


const PolishSentence = ({ polish }) => (
  <p>{polish}</p>
);


export default Sentences;
