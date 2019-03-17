import React from 'react';

const CorrectAnswer = ({ english, isChecked, children }) => {
  return (
    <div>
      {isChecked &&
        <div>
          <p>original sentence:</p>
          <p>{english}</p>
        </div>
      }
      {children}
      {isChecked &&
        <div>
          <Wrong />
          <Good />
        </div>
      }
    </div>
  );
};

const Wrong = () => {
  return <button>Wrong</button>
};

const Good = () => {
  return <button>Good</button>
}

export default CorrectAnswer;
