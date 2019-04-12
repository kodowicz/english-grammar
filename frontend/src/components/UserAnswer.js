import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px
`;

const Label = styled.label`
  color: #523A28;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%
`;

const Textarea = styled.textarea`
  position: relative;
  box-sizing: border-box;
  background: none;
  border: none;
  border-bottom: 2px solid #805A41;
  display: block;
  padding: 5px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #523A28;
  height: min-content;
  width: 100%;
  outline: none;
  resize: none;

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
  margin: 20px 0
`;



class UserAnswer extends Component {
  state = {
    value: "",
    isVisible: true,
    isFocused: false
  }

  handleSubmit = (event) => {
    if (this.state.value.length === 0) return;
    if (event.keyCode === 13 || event.target.matches('button')) {
      event.preventDefault();
      this.props.handleCheck(this.state.value);
      this.setState({ isVisible: !this.state.isVisible })
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render() {
    return (
      <Wrapper>
        <TextWrapper>
          {!this.state.value && !this.state.isFocused &&
            <Label
              forHtml="answer">
              type translation
            </Label>
          }
          <Textarea
            id="answer"
            rows="3"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}>
          </Textarea>
        </TextWrapper>
        {this.state.isVisible &&
          <Button
            onClick={this.handleSubmit}>
            check
          </Button>
        }
      </Wrapper>
    );
  }
}

export default UserAnswer;
