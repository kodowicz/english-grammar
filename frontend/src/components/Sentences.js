import React, { Component } from 'react';
import Correctness from './Correctness';
import EnglishSentence from './EnglishSentence';



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
            <Correctness isChecked={this.props.isChecked}>
              <EnglishSentence english={this.state.sentence.english} handleCheck={this.props.handleCheck} />
            </Correctness>
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
