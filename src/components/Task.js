import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserAnswer from "./UserAnswer";
import Solution from "./Solution";

const Task = ({
  sentences,
  isAnswered,
  isChecked,
  isCompleted,
  checkSolution,
  cleanSolution,
  startTask,
  checkTask,
  completeTask
}) => {
  const [sentence, setSentence] = useState(null);

  useEffect(() => {
    setSentence(getSentence(sentences));
  }, []);

  useEffect(
    () => {
      if (isCompleted) {
        const sentence = getSentence(sentences);
        setSentence(sentence);
      }
    },
    [isCompleted]
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
        isCompleted={isCompleted}
        startTask={startTask}
        cleanSolution={cleanSolution}
        checkSolution={checkSolution}
        completeTask={completeTask}
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
