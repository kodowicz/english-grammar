import { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';

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


export default function useFetchChapters() {
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ chapters, setChapters ] = useState([]);

  useEffect(() => {
    const chapters = [];

    firebase
      .firestore()
      .collection('chapters')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          chapters.push(doc.data());
        });
      })
      .then(() => {
        chapters.sort(compare('chapterId'));
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
