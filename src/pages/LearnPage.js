import React, { useState, useEffect } from "react";
import Task from '../components/Task';

const LearnPage = ({ match }) => {
  const [chapter, setChapter] = useState("");

  useEffect(
    () => {
      setChapter(match.params.id);
    },
    [match]
  );

  return (
    <Task />
  );
};

export default LearnPage;
