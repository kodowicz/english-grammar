import React, { Component } from 'react';
import { Menu } from './Menu';

export class Header extends Component {
  state = {
    topics: []
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/topics')
      .then(res => res.json())
      .then(data =>
        this.setState({
          topics: data
        })
      )
  }

  render () {
    return (
      <header>
        <a href="/">Sentences</a>
        <Menu topics={this.state.topics} />
      </header>
    );
  }
}
