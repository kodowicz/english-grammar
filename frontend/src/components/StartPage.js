import React, { Component } from 'react';

class StartPage extends Component {
  componentDidMount() {
    this.props.fetchTitles();
  }

  render() {
    const { titles, selectTopic, closeStartPage } = this.props;
    return (
      <div>
        <h1>Select a topic</h1>
        {<Menu titles={titles} selectTopic={selectTopic} closeStartPage={closeStartPage} />}
      </div>
    );
  }
}


const Menu = ({ titles, selectTopic, closeStartPage }) => {
  return (
    <ul>
      {titles.map(title =>
        <li
          key={title.id}
          onClick={() => {
            selectTopic(title.id);
            closeStartPage()
          }}
          >
          {title.topic}
        </li>
      )}
    </ul>
  )
};



export default StartPage;
