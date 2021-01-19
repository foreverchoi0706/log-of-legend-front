import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getChallengerRank } from "../../util/reducers/navigationReducer";

import tierDivision from "../../util/tierDivision";
import Loading from "../Loading";

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

export default function ChallengerRank({ tier }) {
  const { isLoaded, entries } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.challengerRank
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChallengerRank());
  }, [dispatch, getChallengerRank]);

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <ChallengerRankStyle>
      {entries.map((summoner) => (
        <div key={summoner.summonerId} className="Summoner-container">
          <img className="Summoner-tier" src={tierDivision[tier]} alt={tier} />
          <div className="Summoner-info">
            <h4>{summoner.summonerName}</h4>
            <strong>{summoner.leaguePoints}point</strong>
            <strong>
              {summoner.wins}wins/{summoner.losses}losses
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
