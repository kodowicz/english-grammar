import React from 'react';
import { connect } from 'react-redux';
import { fetchSentences, refreshPage, fetchAllExamples, selectTopic, handleMenu, handleCheck } from '../actions';

import Navigation from '../components/Navigation';
import Main from '../components/Main';


const MainContainer = (props) => {
  return (
    <>
      {!props.isStartPage &&
        <div>
          <Navigation
            titles={props.titles}
            isOpen={props.isOpen}
            selectTopic={props.selectTopic}
            handleMenu={props.handleMenu} />
          <Main
            topic={props.topic}
            id={props.id}
            sentences={props.sentences}
            refresh={props.refresh}
            allExamples={props.allExamples}
            userAnswer={props.userAnswer}
            fetchSentences={props.fetchSentences}
            refreshPage={props.refreshPage}
            fetchAllExamples={props.fetchAllExamples}
            handleCheck={props.handleCheck} />
        </div>
      }
    </>
  );
}

const mapStateToProps = state => ({
  titles: state.titles,
  topic: state.sentences.topic,
  sentences: state.sentences.sentences,
  refresh: state.refresh,
  allExamples: state.allExamples,
  id: state.topicId,
  isOpen: state.isOpen,
  userAnswer: state.userAnswer,
  isStartPage: state.isStartPage
})

const mapDispatchToProps = { fetchSentences, refreshPage, fetchAllExamples, selectTopic, handleMenu, handleCheck };


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
