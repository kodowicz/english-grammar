import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import {
  startTask,
  checkSolution,
  cleanSolution,
  completeTask
} from "../store/actions";

import { Button } from "../assets/styles";
import { emerge, moveup, fadeaway } from "../assets/keyframes";

const UserAnswer = ({ sentence, isAnswered, isChecked, isCompleted }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(1);
  const inputRef = useRef();
  const minRows = 1;
  const lineHeight = 18;

  const dispatch = useDispatch();
  const setStartTask = (state) => dispatch(startTask(state));
  const setCheckSolution = (state) => dispatch(checkSolution(state));
  const setCleanSolution = (state) => dispatch(cleanSolution(state));
  const setCompleteTask = (state) => dispatch(completeTask(state));

  useEffect(
    () => {
      if (isCompleted) {
        setCompleteTask(false);
        setIsVisible(true);
        setCleanSolution();
        setStartTask();
        setValue("");
        setRows(1);
      }
    },
    [isCompleted]
  );

  useEffect(
    () => {
      if (!isAnswered) inputRef.current.focus();
    },
    [isAnswered]
  );

  function skipTask(event) {
    event.preventDefault();
    setCompleteTask(true);
  };

  function handleChange(event) {
    const elementRows = resizeTextarea(event, minRows, lineHeight);
    setValue(event.target.value);
    setRows(elementRows);
  }

  function handleCheck(event) {
    event.preventDefault();

    if (value) {
      setCheckSolution(value);
      setIsVisible(false);
    };
  }

  function handleAnimation(event) {
    if (isChecked && event.animationName === fadeaway.name) {
      setCompleteTask(true);
    }
  }

  function resizeTextarea(event, minRows, lineHeight) {
    const previousRows = event.target.rows;
    event.target.rows = minRows;

    const currentRows = ~~(event.target.scrollHeight / lineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    return currentRows;
  }

  return (
    <Form
      isChecked={isChecked}
      isAnswered={isAnswered}
      isCompleted={isCompleted}
      onAnimationEnd={handleAnimation}
    >
      <Paragraph>{sentence.polish}</Paragraph>
      <Wrapper>
        <SkipButton onClick={skipTask}>skip</SkipButton>
        <Textarea
          autoFocus
          rows={rows}
          value={value}
          ref={inputRef}
          onChange={handleChange}
          lang="en"
          placeholder="type transcription"
        />
      </Wrapper>
      <Button isVisible={isVisible} onClick={handleCheck}>
        check
      </Button>
    </Form>
  );
};

const Form = styled.form`
  translation: transform 0.3s ease-out;
  opacity: 0;
  z-index: 1;
  position: relative;
  padding: 1px 0;

  ${({ isChecked, isAnswered, isCompleted }) => {

    if (!isCompleted && !isAnswered)
      return css`
        animation: ${emerge("20vh", "15vh")} 1s both;
      `;

    else if (isAnswered && !isChecked)
      return css`
        animation: ${moveup} 1s both;
      `;

    else if (isAnswered && isChecked)
      return css`
        animation: ${fadeaway} 0.7s;
      `;
  }}};
`;

const Paragraph = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 2.2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

const Wrapper = styled.div`
  margin: 3rem auto;

  @media (min-width: 768px) {
    margin: 4rem auto;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.lightGray};
  font-family: ${({ theme }) => theme.minorFamily};
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  transition: background 0.5s, color 0.5s;
  appearance: none;
  width: 100%;
  height: auto;
  line-height: 1.8rem;
  font-size: 1.6rem;
  box-sizing: border-box;
  border-radius: 2rem;
  padding: 8px 2rem;
  outline: none;
  overflow: hidden;
  resize: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.lightGray};
  }
`;

const SkipButton = styled.button`
  font-family: ${({ theme }) => theme.minorFamily};
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0.5rem 0.5rem auto;
  background: none;
  padding: 0.5rem;
  display: block;
  border: none;
`;

export default UserAnswer;
