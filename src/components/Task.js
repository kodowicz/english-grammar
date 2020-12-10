import React, { useState, useEffect } from "react";
import UserAnswer from "./UserAnswer";
import Solution from "./Solution";

const Task = ({
  sentences,
  userAnswer,
  checkSolution
}) => {
  const [sentence, setSentence] = useState(null);


  useEffect(() => {
    setSentence(getSentence(sentences));
  }, []);

  function getSentence(sentences) {
    const index = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[index];

    return sentence;
  }

  return sentence ? (
    <>
      <UserAnswer
        sentence={sentence}
        checkSolution={checkSolution}
      />
      { userAnswer && (
        <Solution
          userAnswer={userAnswer}
          correctAnswer={sentence.english}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default Task;
