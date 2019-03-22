import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
  color: #FFFFFF;
`;

const Menu = ({ titles, selectTopic }) => {
  return (
    <List>
      {titles.map(title =>
        <li
          key={title.id}
          onClick={(event) => selectTopic(title.id)}
          >
          {title.topic}
        </li>
      )}
    </List>
  )
};

export default Menu;
