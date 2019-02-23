import React, { Component } from 'react';
import { Sentences } from './Sentences';


export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: '',
      englishSentence: '',
      polishSentence: ''
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/search/22')
      .then(res => res.json())
      .then(data =>
        this.setState({
          topic: data.topic,
          englishSentence: data.sentences[3].english,
          polishSentence: data.sentences[3].polish
        })
      )
  }

  render() {
    return (
      <main>
        <Title topic={this.state.topic} />
        <Sentences english={this.state.englishSentence} polish={this.state.polishSentence} />
      </main>
    );
  }
}


const Title = ({ topic }) => (
  <h1>{topic}</h1>
)
