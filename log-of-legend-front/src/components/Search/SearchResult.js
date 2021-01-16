import React, { useState } from "react";
import styled from "styled-components";

import Emblem_Iron from "../../img/emblems/Emblem_Iron.png";
import Emblem_Bronze from "../../img/emblems/Emblem_Bronze.png";
import Emblem_Silver from "../../img/emblems/Emblem_Silver.png";
import Emblem_Gold from "../../img/emblems/Emblem_Gold.png";
import Emblem_Platinum from "../../img/emblems/Emblem_Platinum.png";
import Emblem_Diamond from "../../img/emblems/Emblem_Diamond.png";
import Emblem_Master from "../../img/emblems/Emblem_Master.png";
import Emblem_Grandmaster from "../../img/emblems/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../img/emblems/Emblem_Challenger.png";

const SummonerStyle = styled.div`
  width: inherit;
  display: flex;
  padding : 10px;
  gap : 5px;
  .Summoner-tier {
    width: 100px;
  }
  .Summoner-info {
    flex-grow: 1;
  }
`;

const tierDivision = {
  IRON: Emblem_Iron,
  BRONZE: Emblem_Bronze,
  SILVER: Emblem_Silver,
  GOLD: Emblem_Gold,
  PLATINUM: Emblem_Platinum,
  DIAMOND: Emblem_Diamond,
  MASTER: Emblem_Master,
  GRANDMASTER: Emblem_Grandmaster,
  CHALLENGER: Emblem_Challenger,
};

export default function Summoner({
  summonerName,
  tier,
  rank,
  leaguePoints,
  wins,
  losses,
}) {
  const [summoner, setSummoner] = useState({});

  return (
    <SummonerStyle className="Summoner">
      <img className="Summoner-tier" src={tierDivision[tier]} alt={tier} />
      <div className="Summoner-info">
        {summonerName}
        {rank}
        {tier}
        {leaguePoints}
        {wins}
        {losses}
      </div>
    </SummonerStyle>
  );
}
