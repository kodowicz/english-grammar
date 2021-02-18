import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { changeTheme } from '../../store/actions';
import { sunrise, sunset } from '../../styles/keyframes';
import { ReactComponent as Svg } from '../../assets/switcher.svg';

const Switcher = ({ isHome }) => {
  const [ isSwitched, setSwitched ] = useState(false);
  const { isLight } = useSelector(state => ({
    isLight: state.theme.isLight
  }));

  const dispatch = useDispatch();
  const setChangeTheme = (state) => dispatch(changeTheme(state));

  useEffect(
    () => {
      if (!isSwitched) {
        setChangeTheme(!isHome);
      }
    },
    [isHome]
  );

  function switchTheme () {
    setSwitched(true);
    setChangeTheme(!isLight);
  };

  return (
    <Button isLight={isLight} onClick={switchTheme}>
      <SwitchSvg isLight={isLight} />
    </Button>
  )
};

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
}
`;

const SwitchSvg = styled(Svg)`
  width: 3.5rem;

  g {
    g {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.black};
      transition: fill 0.5s, stroke 0.5s;
    }

    #sun {
      ${({ isLight }) =>
        isLight
        ? css`
          animation: ${sunset} 1s both;
        `
        : css`
          animation: ${sunrise} 1s both;
        `};
    }
  }
`;

export default Switcher;
