import React from 'react';
import { connect } from 'react-redux';
import { fetchTitles, fetchExamples, selectTopic, closeStartPage } from '../actions';

import StartPage from '../components/StartPage';


const StartPageContainer = ({ titles, examples, isStartPage, fetchTitles, fetchExamples, selectTopic, closeStartPage }) => {
  return (
    <div>
      {isStartPage &&
        <StartPage
          titles={titles}
          examples={examples}
          selectTopic={selectTopic}
          fetchTitles={fetchTitles}
          fetchExamples={fetchExamples}
          closeStartPage={closeStartPage}
        />
      }
    </div>
  );

}


const mapStateToProps = state => ({
  titles: state.titles,
  examples: state.examples,
  isStartPage: state.isStartPage
})

const mapDispatchToProps = { fetchTitles, fetchExamples, selectTopic, closeStartPage };

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
