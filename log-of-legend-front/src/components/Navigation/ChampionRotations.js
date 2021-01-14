import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Poroading from "../Poroading";

import { championRaotaions } from "../../reducers/apiReducer";

const ChampionRotationsStyle = styled.div`
  .ChampionRotations-container {
    width: 600px;
    padding: 20px 0 20px 0;
    color: white;

    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

    img {
      border-radius: 5px;
      height: 60px;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    width: calc(100vw - 2px);
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
      <div className="ChampionRotations-container">
        {isLoaded &&
          data.map((champion) => (
            <img
              key={champion.key}
              alt={champion.name}
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
            />
          ))}
      </div>
    </ChampionRotationsStyle>
  );
}
