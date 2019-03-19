import React, { Component } from 'react';

class UserAnswer extends Component {
  state = {
    value: '',
    isVisible: true
  }

  handleSubmit = (event) => {
    if (this.state.value === undefined) return;
    event.preventDefault();
    this.props.handleCheck(this.state.value);
    this.setState({ isVisible: !this.state.isVisible })
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
        {this.state.isVisible &&
          <button
          onClick={this.handleSubmit}>
          check</button>
        }
      </div>
    );
  }
}

export default UserAnswer;
