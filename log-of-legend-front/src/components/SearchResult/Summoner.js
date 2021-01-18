import React, { useState, memo } from "react";
import styled from "styled-components";

import tierDivision from "../../util/tierDivision";

const SummonerStyle = styled.div`
  display: flex;
  justify-content: center;
  color: white;
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

Summoner.defaultProps = {
  leagueId: "56a78772-1e2b-44b3-92d2-5d96947f355f",
  queueType: "RANKED_SOLO_5x5",
  tier: "SILVER",
  rank: "II",
  summonerId: "nq--qeYj5H8ZY3LkQAkJuHK2VCUC9j8fvx_WQ2eHBHJwGw",
  summonerName: "강민서님",
  leaguePoints: 73,
  wins: 13,
  losses: 18,
  veteran: false,
  inactive: false,
  freshBlood: false,
  hotStreak: false,
  profileIconId: 4568,
};

export default memo(Summoner);
