import React from 'react';
import { connect } from 'react-redux';
import { fetchTitles, selectTopic, closeStartPage } from '../actions';

import StartPage from '../components/StartPage';


const StartPageContainer = ({ titles, isStartPage, fetchTitles, selectTopic, closeStartPage }) => {
  return (
    <div>
      {isStartPage &&
        <StartPage
          titles={titles}
          selectTopic={selectTopic}
          fetchTitles={fetchTitles}
          closeStartPage={closeStartPage}
        />
      }
    </div>
  );

}


const mapStateToProps = state => ({
  titles: state.titles,
  isStartPage: state.isStartPage
})

export default connect(mapStateToProps, { fetchTitles, selectTopic, closeStartPage })(StartPageContainer);
