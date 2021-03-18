import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import Loading from "../Loading";
//styles
import styles from "../../styles/nav/ChallengerRank.module.scss";
//utills
import { getChallengerRank } from "../../util/reducers/navigationReducer";
import { tierDivision } from "../../util/division";

function ChallengerRank({ tier }) {
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
    <div className={styles.ChallengerRank}>
      {entries.slice(0, 8).map((summoner) => (
        <div key={summoner.summonerId} className={styles.Summoner_container}>
          <img
            className={styles.Summoner_tier}
            src={tierDivision[tier]}
            alt={tier}
          />
          <div className={styles.Summoner_info}>
            <h4>{summoner.summonerName}</h4>
            <strong>{summoner.leaguePoints}point</strong>
            <strong>
              {summoner.wins}승/{summoner.losses}패
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}

ChallengerRank.defaultProps = {
  tier: "CHALLENGER",
};

export default memo(ChallengerRank);
