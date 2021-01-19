import React from "react";
import { Link as LinkElement } from "react-router-dom";
import styled from "styled-components";

import { fonts, colors } from "../assets/styles";

const MenuList = ({ chapters }) => (
  <List>
    { chapters.map(chapter => (
      <ListItem key={chapter.id}>
        <Link to={`/chapter/${chapter.id}`}>
          <Counter>{chapter.chapterId}{"."}</Counter>
          <Anchor>{chapter.topic}</Anchor>
        </Link>
      </ListItem>
    ))}
  </List>
);

const List = styled.ol`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  color: ${colors.white};
  margin: 1.5rem 0;
  list-style: none;
`;

const Link = styled(LinkElement)`
  font-weight: ${fonts.medium};
  font-family: ${fonts.minorFamily};
  color: inherit;
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  grid-column-gap: 2rem;
  text-decoration: none;
  transition: transform 0.3s ease-out;
  width: fit-content;

  &:hover,
  &:focus {
    transform: translateX(2rem);
  }

  @media (min-width: 768px) {
    grid-template-columns: 5rem 1fr;
  }
`;

const Counter = styled.span`
  font-weight: ${fonts.bold};
  color: inherit;
  font-size: 1.8rem;
  justify-self: center;

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Anchor = styled.span`
  font-size: 1.8rem;

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

export default MenuList;
