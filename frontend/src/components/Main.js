import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTitles } from '../actions';


class Main extends Component {
  render() {
    return <div>Sentences {this.props.topic}</div>
  }
}


const Title = ({ topic }) => (
  <h1>{topic}</h1>
)


export default Main;
