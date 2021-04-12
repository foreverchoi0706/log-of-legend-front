import React, { memo } from "react";
//components
import MatchList from "./summonerInfo/MatchList";
//styles
import styles from "../styles/SummonerInfo.module.scss";
//utills
import { tierDivision } from "../util/division";

function SummonerInfo(summoner) {
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
