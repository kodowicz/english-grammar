import React, { useState } from "react";

const Solution = ({ userAnswer, correctAnswer }) => {

  function handleConfirm(event) {
    event.preventDefault();
  }

  return (
    <div>
      <p>original sentence:</p>
      <h2>{correctAnswer}</h2>
      <div>
        <button onClick={handleConfirm}>next</button>
      </div>
    </div>
  );
};

export default Solution;
