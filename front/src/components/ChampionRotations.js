import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Poroading from "../components/Poroading";

import { rotations } from "../reducers/apiReducer";

const ChampionRotationsStyle = styled.div`
  width: 600px;
  color: white;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: 100px 100px 100px;
  justify-content : space-between;
  img{
    border : 1px solid yellow;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function ChampionRotations() {
  const {
    isLoaded,
    freeChampionIds,
    freeChampionIdsForNewPlayers,
    maxNewPlayerLevel,
  } = useSelector(
    (rootReducer) => rootReducer.apiReducer.championRotations,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rotations());
    console.log(freeChampionIds);
    console.log(isLoaded);
  }, [dispatch, rotations]);

  return (
    <ChampionRotationsStyle>
      {isLoaded &&
        freeChampionIds.map((freeChampionId) => (
          <img key={freeChampionId} alt={freeChampionId} />
        ))}
    </ChampionRotationsStyle>
  );
}
