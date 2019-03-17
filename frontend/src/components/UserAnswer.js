import React, { Component } from 'react';

class UserAnswer extends Component {
  state = {
    value: ''
  }

  handleSubmit = (event) => {
    if (this.state.value === undefined) return;
    event.preventDefault();
    console.log(this.state.value);
    this.props.handleCheck(this.state.value);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          //value={this.state.value}
          placeholder="type translation" />
        <button
          onClick={this.handleSubmit}>
          check</button>

      </div>
    );
  }
}

export default UserAnswer;
