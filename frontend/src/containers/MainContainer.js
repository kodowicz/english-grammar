import React from 'react';
import { connect } from 'react-redux';
import { fetchSentences, selectTopic, handleMenu, handleCheck } from '../actions';

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
            // sentence={props.sentence}
            sentences={props.sentences}
            isChecked={props.isChecked}
            fetchSentences={props.fetchSentences}
            handleCheck={props.handleCheck} />
        </div>
      }
    </>
  );
}


// function randomSentence(array) {
//   if (array !== undefined) {
//     const random = Math.round(Math.random() * array.length);
//     return array[random];
//   } else {
//     return ''
//   }
// }

const mapStateToProps = state => ({
  titles: state.titles,
  topic: state.sentences.topic,
  //sentence: randomSentence(state.sentences.sentences),
  sentences: state.sentences.sentences,
  id: state.topicId,
  isOpen: state.isOpen,
  isChecked: state.isChecked,
  isStartPage: state.isStartPage
})

export default connect(mapStateToProps, { fetchSentences, selectTopic, handleMenu, handleCheck })(MainContainer);
