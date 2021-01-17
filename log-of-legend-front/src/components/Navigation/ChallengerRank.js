import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getChallengerRank } from "../../reducers/navigationReducer";

import Emblem_Iron from "../../img/emblems/Emblem_Iron.png";
import Emblem_Bronze from "../../img/emblems/Emblem_Bronze.png";
import Emblem_Silver from "../../img/emblems/Emblem_Silver.png";
import Emblem_Gold from "../../img/emblems/Emblem_Gold.png";
import Emblem_Platinum from "../../img/emblems/Emblem_Platinum.png";
import Emblem_Diamond from "../../img/emblems/Emblem_Diamond.png";
import Emblem_Master from "../../img/emblems/Emblem_Master.png";
import Emblem_Grandmaster from "../../img/emblems/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../img/emblems/Emblem_Challenger.png";

const ChallengerRankStyle = styled.div`
  width: 600px;
  color: white;
  font-size: 0.8rem;
  width: inherit;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
  .Summoner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    .Summoner-tier {
      width: 75px;
    }
    .Summoner-info {
      h4 {
        color: gold;
      }
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    .Summoner-container {
      .Summoner-tier {
        width: 50px;
      }
    }
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

export default function ChallengerRank({ tier }) {
  const { isLoaded, entries } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.challengerRank
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChallengerRank());
  }, [dispatch, getChallengerRank]);

  return (
    <ChallengerRankStyle>
      {isLoaded &&
        entries.map((summoner) => (
          <div key={summoner.summonerId} className="Summoner-container">
            <img
              className="Summoner-tier"
              src={tierDivision[tier]}
              alt={tier}
            />
            <div className="Summoner-info">
              <h4>{summoner.summonerName}</h4>
              <strong>{summoner.leaguePoints}point</strong>
              <strong>
                {summoner.wins}승/{summoner.losses}패
              </strong>
            </div>
          </div>
        ))}
    </ChallengerRankStyle>
  );
}

ChallengerRank.defaultProps = {
  tier: "CHALLENGER",
};
