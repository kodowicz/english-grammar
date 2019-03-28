import React from 'react';
import { connect } from 'react-redux';
import { fetchSentences, refreshPage, fetchExamples, selectTopic, handleMenu, handleCheck } from '../actions';

import Navigation from '../components/Navigation';
import Main from '../components/Main';


const MainContainer = (props) => {
  return (
    <>
      {!props.isStartPage &&
        <div>
          <Navigation
            titles={props.titles}
            examples={props.examples}
            isOpen={props.isOpen}
            selectTopic={props.selectTopic}
            refreshPage={props.refreshPage}
            handleMenu={props.handleMenu} />
          <Main
            topic={props.topic}
            id={props.id}
            sentences={props.sentences}
            refresh={props.refresh}
            examples={props.examples}
            userAnswer={props.userAnswer}
            fetchSentences={props.fetchSentences}
            refreshPage={props.refreshPage}
            fetchExamples={props.fetchExamples}
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
  examples: state.examples,
  id: state.topicId,
  isOpen: state.isOpen,
  userAnswer: state.userAnswer,
  isStartPage: state.isStartPage
})

const mapDispatchToProps = { fetchSentences, refreshPage, fetchExamples, selectTopic, handleMenu, handleCheck };


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
