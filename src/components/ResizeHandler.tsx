import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../state';
import * as windowActions from '../state/window';

import * as S from './style';

const ResizeHandler: React.FC<{ print: boolean }> = ({ print }) => {
  const dispatch = useDispatch();
  const widthLevel = useSelector((state: RootState) => state.window.widthLevel);

  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const resizeHandler = () => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
    const currentWidth = window.innerWidth;
    let nextWidthLevel = 0;
    if (currentWidth >= 1280) nextWidthLevel = 1280;
    else if (currentWidth >= 720) nextWidthLevel = 720;
    else nextWidthLevel = 300;
    // when width level change
    if (widthLevel !== nextWidthLevel) {
      dispatch(windowActions.setWidthLevel(nextWidthLevel));
      // if (!isModalUsed) dispatch(windowActions.setScreenGuardLevel(0));
    }
    // exception for safari
    if (window.screen.orientation !== undefined && window.screen.orientation.type !== undefined) {
      if (!window.screen.orientation.type.includes('landscape')) {
        dispatch(windowActions.setWidthLevel(nextWidthLevel));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', resizeHandler);
    };
  }, [widthLevel]);

  if (innerWidth === 0) resizeHandler();

  return (
    <>
      {print ? (
        <S.SizeViewer>
          [inner:{innerWidth}x{innerHeight}] {widthLevel} <br />
          [screen:{screenWidth} x {screenHeight}]
          {window.screen.orientation !== undefined && window.screen.orientation.type !== undefined
            ? window.screen.orientation.type
            : ''}
        </S.SizeViewer>
      ) : null}
    </>
  );
};

export default ResizeHandler;
