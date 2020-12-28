import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { rotations } from "../reducers/apiReducer";

const ChampionRotationsStyle = styled.div`
  width: 600px;

  @media (max-width: 600px) {
    width: 100vw;
    display: grid;
  }
`;

export default function ChampionRotations() {
  const { championRotations } = useSelector(
    (rootReducer) => rootReducer.apiReducer,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rotations());
  }, [dispatch]);

  return (
    <ChampionRotationsStyle>
      {championRotations.freeChampionIds.map((champion) => {
        <span>{champion.freeChampionIds}</span>;
      })}
    </ChampionRotationsStyle>
  );
}
