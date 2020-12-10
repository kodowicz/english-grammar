import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as firebase from "firebase/app";
import { checkSolution } from "../store/actions/index";

import Task from "../components/Task";

function useFetchSentences(id) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sentences, setSentences] = useState(null);

  useEffect(
    () => {
      if (id) {
        let sentences = [];

        firebase
          .firestore()
          .collection(`chapters/${id}/sentences`)
          .get()
          .then(snap => {
            snap.docs.map(doc => sentences.push(doc.data()));
          })
          .then(() => {
            setSentences(sentences);
            setLoading(false);
          })
          .catch(err => setError(err));
      }
    },
    [id]
  );

  return [sentences, loading, error];
}

const LearnPage = ({ match }) => {
  const [chapter, setChapter] = useState("");
  const [sentences, loading, error] = useFetchSentences(chapter);

  const { userAnswer } = useSelector(state => ({
    userAnswer: state.task.userAnswer
  }));

  const dispatch = useDispatch();
  const setCheckSolution = state => dispatch(checkSolution(state));

  useEffect(
    () => {
      setChapter(match.params.id);
    },
    [match]
  );

  return loading ? (
    <></>
  ) : (
    <Task
      sentences={sentences}
      userAnswer={userAnswer}
      checkSolution={setCheckSolution}
    />
  );
};

export default LearnPage;
