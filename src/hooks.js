import { useState, useEffect } from "react";
import * as firebase from "firebase/app";

const compare = (byWhat) => (a, b) => {
  const termA = a[byWhat];
  const termB = b[byWhat];
  let comparison = 0;

  if (termA > termB) {
    comparison = 1;
  } else if (termA < termB) {
    comparison = -1;
  }
  return comparison;
}

export function useFetchChapters() {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ chapters, setChapters ] = useState([]);

  useEffect(() => {
    const chapters = [];

    firebase
      .firestore()
      .collection("chapters")
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          chapters.push(doc.data());
        });
      })
      .then(() => {
        chapters.sort(compare("chapterId"));
        setChapters(chapters);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, []);

  return {
    chapters,
    loading,
    error
  };
}

export function useFetchSentences(id) {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ sentences, setSentences ] = useState(null);

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

  return {
    sentences,
    loading,
    error
  };
}
