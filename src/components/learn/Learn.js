import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetchSentences from '../../hooks/useFetchSentences';
import { cleanSolution } from '../../store/actions/index';
import Task from './Task';

const Learn = () => {
  const [ chapter, setChapter ] = useState('');
  const { sentences, loading, error } = useFetchSentences(chapter);
  const params = useParams();

  const { isAnswered, isChecked, isCompleted } = useSelector(state => ({
    isAnswered: state.task.isAnswered,
    isChecked: state.task.taskChecked,
    isCompleted: state.task.taskCompleted
  }));

  const dispatch = useDispatch();
  const setCleanSolution = () => dispatch(cleanSolution());

  useEffect(
    () => {
      setChapter(params.id);
    },
    [params]
  );

  // if chapter changed and task was open
  useEffect(() => {
    setCleanSolution()
  }, []);

  if (error) return <Error>Coundn't load sentences. Please try again.</Error>;
  if (loading) return <></>;
  return (
    <Task
      sentences={sentences}
      isAnswered={isAnswered}
      isChecked={isChecked}
      isCompleted={isCompleted}
    />
  );
};

const Error = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.2rem;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

export default Learn;
