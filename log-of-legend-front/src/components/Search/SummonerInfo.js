import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//components
import MatchList from "./MatchList";
//styles
import styles from "../../styles/search/SummonerInfo.module.scss";
//utills
import { tierDivision } from "../../util/division";
import { getChampions } from "../../util/reducers/searchReducer";

function SummonerInfo(summoner) {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.champions,
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.SummonerInfo}>
      <div className={styles.SummonerInfo_detail}>
        <img
          className={styles.Summoner_detail_tier}
          src={tierDivision[summoner.tier]}
        ></img>
        <div className={styles.Summoner_detail_blurb}>
          <strong>{summoner.summonerName}</strong>
          <strong>
            {summoner.tier} {summoner.rank} {summoner.leaguePoints}점
          </strong>
          <strong>
            {summoner.wins}승/{summoner.losses}패
          </strong>
        </div>
      </div>
      <MatchList {...summoner} />
    </div>
  );
}

export default memo(SummonerInfo);
