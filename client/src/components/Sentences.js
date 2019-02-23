import React, { Component } from 'react';

export class Sentences extends Component {
  render() {
    return (
      <div>
        <Polish polish={this.props.polish} />
        <English english={this.props.english} />
      </div>
    );
  }
}

const Polish = ({ polish }) => (
  <p>{polish}</p>
);

const English = ({ english }) => (
  <p>{english}</p>
);
