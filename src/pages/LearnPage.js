import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetchSentences } from "../hooks";
import {
  checkSolution,
  cleanSolution,
  startTask,
  checkTask,
  completeTask
} from "../store/actions/index";

import Task from "../components/Task";

const LearnPage = ({ match }) => {
  const [chapter, setChapter] = useState("");
  const [sentences, loading, error] = useFetchSentences(chapter);

  const { isAnswered, isChecked, isCompleted } = useSelector(state => ({
    isAnswered: state.task.isAnswered,
    isChecked: state.task.taskChecked,
    isCompleted: state.task.taskCompleted
  }));

  const dispatch = useDispatch();
  const setCheckSolution = () => dispatch(checkSolution());
  const setCleanSolution = () => dispatch(cleanSolution());
  const setStartTask = () => dispatch(startTask());
  const setCheckTask = () => dispatch(checkTask());
  const setCompleteTask = state => dispatch(completeTask(state));

  useEffect(
    () => {
      setChapter(match.params.id);
    },
    [match]
  );

  useEffect(() => {
    // if chapter changed and task was open
    setCleanSolution();
  }, []);

  return loading ? (
    <></>
  ) : (
    <Task
      sentences={sentences}
      isAnswered={isAnswered}
      isChecked={isChecked}
      isCompleted={isCompleted}
      checkSolution={setCheckSolution}
      cleanSolution={setCleanSolution}
      startTask={setStartTask}
      checkTask={setCheckTask}
      completeTask={setCompleteTask}
    />
  );
};

export default LearnPage;
