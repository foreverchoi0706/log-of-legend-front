import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Poroading from "../components/Poroading";

import { championRaotaions } from "../reducers/apiReducer";

const ChampionRotationsStyle = styled.div`
  width: 600px;
  color: white;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: 80px 80px 80px;
  justify-items : center;
  align-items : center;

justify-content :space-between; 
  gap : 10px;

  img {
    border-radius : 5px;
    width: 100px;
    height: 80px;
    cursor: pointer;
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
    dispatch(championRaotaions());
  }, [dispatch, championRaotaions]);

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
