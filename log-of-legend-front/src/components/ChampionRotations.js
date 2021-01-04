import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Poroading from "../components/Poroading";

import { rotations } from "../reducers/apiReducer";

const ChampionRotationsStyle = styled.div`
  width: 600px;
  color: white;
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: 100px 100px 100px;
  justify-content: space-between;

  img {
    border-radius : 5px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function ChampionRotations() {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.apiReducer.championRotations,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rotations());
  }, [dispatch, rotations]);

  return (
    <ChampionRotationsStyle>
      {isLoaded &&
        data.map((champion) => (
          <img
            key={champion.key}
            alt={champion.name}
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          />
        ))}
    </ChampionRotationsStyle>
  );
}
