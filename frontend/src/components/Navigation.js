import React from 'react';
import Menu from './Menu';


const Navigation = ({ titles, isOpen, selectTopic, handleMenu }) => {
  return (
    <div>
      <button
        onClick={() => handleMenu()}>
        menu
      </button>

      {isOpen && <Menu titles={titles} selectTopic={selectTopic} isOpen={isOpen} />}
    </div>
  )
};


export default Navigation;
