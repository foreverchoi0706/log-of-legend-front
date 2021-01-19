import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../Loading";

import { match } from "../../util/reducers/searchReducer";

const MatchStyle = styled.div`
  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--theme-color-border);
`;

function Match({ gameId }) {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.match,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(match(gameId));
  }, [dispatch]);

  const getGameDuration = (gameDuration) => {
    const minites = 60;
    return `${Math.ceil(gameDuration / minites)}분${gameDuration % minites}초`;
  };

  if (!isLoaded) {
    return <Loading />;
  }
  return <MatchStyle>{getGameDuration(data.gameDuration)}</MatchStyle>;
}

export default memo(Match);
