import { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';

export default function useFetchSentences(id) {
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
