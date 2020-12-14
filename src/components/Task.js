import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserAnswer from "./UserAnswer";
import Solution from "./Solution";

const Task = ({
  sentences,
  isAnswered,
  isChecked,
  checkSolution,
  cleanSolution,
  startTask,
  checkTask,
}) => {
  const [sentence, setSentence] = useState(null);

  useEffect(() => {
    setSentence(getSentence(sentences));
  }, []);

  useEffect(
    () => {
      if (isChecked) {
        const sentence = getSentence(sentences);
        setSentence(sentence);
      }
    },
    [isChecked]
  );

  function getSentence(sentences) {
    const index = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[index];

    return sentence;
  }

  return sentence ? (
    <Wrapper>
      <UserAnswer
        sentence={sentence}
        isAnswered={isAnswered}
        isChecked={isChecked}
        startTask={startTask}
        cleanSolution={cleanSolution}
        checkSolution={checkSolution}
      />
      { isAnswered && (
        <Solution
          isAnswered={isAnswered}
          correctAnswer={sentence.english}
          checkTask={checkTask}
        />
      )}
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  padding: 7rem 2rem 0;

  @media (min-width: 768px) {
    width: 50vw;
    max-width: 60rem;
    margin: 0 auto;
    padding-top: 10rem;
  }
`;

export default Task;
