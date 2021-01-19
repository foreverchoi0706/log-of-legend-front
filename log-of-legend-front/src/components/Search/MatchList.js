import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { matchList } from "../../util/reducers/searchReducer";

import Match from "./Match";

const MatchListStyle = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    width: calc(100vw);
  }
  @media (max-width: 340px) {
  }
`;

function MatchList({ accountId }) {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.matchList,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    matchList(accountId);
  }, [dispatch]);

  return <MatchListStyle></MatchListStyle>;
}

export default memo(MatchList);
