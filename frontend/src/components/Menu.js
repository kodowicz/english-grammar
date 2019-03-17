import React from 'react';


const Menu = ({ titles, selectTopic }) => {
  return (
    <ul>list
      {titles.map(title =>
        <li
          key={title.id}
          onClick={(event) => selectTopic(title.id)}
          >
          {title.topic}
        </li>
      )}
    </ul>
  )
};

export default Menu;
