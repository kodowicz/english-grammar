import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import * as firebase from "firebase/app";

import MenuList from "../components/MenuList";
import { colors } from "../assets/styles";

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

function useFetchChapters() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("chapters")
      .get()
      .then(snap => {
        snap.docs.map(doc => {
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

  return [chapters, loading, error];
}

const Menu = () => {
  const [chapters, loading, error] = useFetchChapters();

  return (
    <Nav>
      { chapters &&
        <MenuList chapters={chapters} />
      }
    </Nav>
  )
};

const Nav = styled.nav`
  background: ${colors.black};
  color: ${colors.white};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 6rem 2rem;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 7rem 10rem;
  }
`;

export default Menu;
