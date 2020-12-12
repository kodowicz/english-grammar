import React, { useState, useEffect } from "react";
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
    <>
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
    </>
  ) : (
    <></>
  );
};

export default Task;
