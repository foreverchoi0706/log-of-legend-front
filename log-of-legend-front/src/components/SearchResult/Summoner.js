import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tierDivision from "../../util/tierDivision";

const SummonerStyle = styled.div`
  display: flex;
  justify-content: center;

  background-color: var(--theme-color-bg);
  border: 1px solid var(--theme-color-border);
  border-radius: 5px;
  .Summoner-tier {
    width: 150px;
  }
  .Summoner-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function Summoner(summoner) {

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <SummonerStyle>
      <img className="Summoner-tier" src={tierDivision[summoner.tier]}></img>
      <div className="Summoner-detail">
        <strong>{summoner.summonerName}</strong>
        <strong>
          {summoner.tier} {summoner.rank} {summoner.leaguePoints}점
        </strong>
        <strong>
          {summoner.wins}승/{summoner.losses}패
        </strong>
      </div>
    </SummonerStyle>
  );
}

export default memo(Summoner);
