import React, { useState, useEffect } from "react";
import UserAnswer from "./UserAnswer";
import Solution from "./Solution";

const Task = () => {
  const [sentence, setSentence] = useState({
    polish: "polish sentence",
    english: "english sentence"
  });
  const userAnswer = false;

  return (
    <>
      <UserAnswer
        sentence={sentence}
      />
      { userAnswer && (
        <Solution
          userAnswer={userAnswer}
          correctAnswer={sentence.english}
        />
      )}
    </>
  );
}

export default Task;
