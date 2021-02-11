import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserAnswer from "./UserAnswer";
import Solution from "./Solution";

const Task = ({
  sentences,
  isAnswered,
  isChecked,
  isCompleted
}) => {
  const [sentence, setSentence] = useState(null);
  const [lastSentence, setLastSentence] = useState(null);

  useEffect(() => {
    const sentence = getSentence(sentences, lastSentence);
    setLastSentence(sentence.sentenceId);
    setSentence(sentence);
  }, []);

  useEffect(
    () => {
      if (isCompleted) {
        const sentence = getSentence(sentences, lastSentence);
        setLastSentence(sentence.sentenceId);
        setSentence(sentence);
      }
    },
    [isCompleted]
  );

  function getSentence(sentences, lastSentence) {
    let index = Math.floor(Math.random() * sentences.length);

    while (index === lastSentence) {
      index = Math.floor(Math.random() * sentences.length);
    }

    const sentence = sentences.find(el => el.sentenceId === index);
    return sentence;
  }

  return sentence ? (
    <Wrapper>
      <UserAnswer
        sentence={sentence}
        isAnswered={isAnswered}
        isChecked={isChecked}
        isCompleted={isCompleted}
      />
      { isAnswered && (
        <Solution
          isAnswered={isAnswered}
          correctAnswer={sentence.english}
        />
      )}
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.main`
  padding: 7rem 2rem 0;

  @media (min-width: 768px) {
    width: 50vw;
    max-width: 60rem;
    margin: 0 auto;
    padding-top: 10rem;
  }
`;

export default Task;
