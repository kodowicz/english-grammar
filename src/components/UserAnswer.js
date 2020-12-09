import React, { useState, useEffect } from "react";

const UserAnswer = ({ sentence }) => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(1);
  const minRows = 1;
  const lineHeight = 18;

  function handleChange(event) {
    const elementRows = resizeTextarea(event, minRows, lineHeight);
    setValue(event.target.value);
    setRows(elementRows);
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
    <form>
      <h1>{sentence.polish}</h1>
      <textarea
        rows={rows}
        value={value}
        onChange={handleChange}
        lang="en"
        placeholder="type transcription"
      />
      <button>check</button>
    </form>
  );
};

export default UserAnswer;
