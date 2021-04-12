import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
//components
import Loading from "../Loading";
import Team from "./Team";
//styles
import styles from "../../styles/summonerInfo/MatchList.module.scss";
//util
import { matchList, nextMatchList } from "../../util/reducers/searchReducer";

const DAY = 86400000;
const MINITES = 60;

let beginIndex = 5;
let endIndex = 10;

function Match({
  mapId,
  gameDuration,
  gameCreation,
  teams,
  participants,
  participantIdentities,
}) {
  const getGameDuration = (gameDuration) =>
    `${Math.ceil(gameDuration / MINITES)}분${gameDuration % MINITES}초`;

  const getGameCreation = (gameCreation) =>
    `${Math.ceil((new Date().getTime() - gameCreation) / DAY)}일전`;

  return (
    <div className={styles.Match}>
      <div className={styles.Match_container}>
        <div className={styles.Match_head}>
          <img
            className={styles.Match_map}
            src={`https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${mapId}.png`}
            alt="Match_map"
          />
          <div>
            <strong>{getGameDuration(gameDuration)}</strong>
            <br />
            <strong>{getGameCreation(gameCreation)}</strong>
          </div>
        </div>
        <hr />
        <div className={styles.Match_teams}>
          <Team
            mapId={mapId}
            division={"BLUE"}
            win={teams[0].win}
            team={participants.slice(0, 5)}
            participantIdentities={participantIdentities}
          />
          <Team
            mapId={mapId}
            division={"RED"}
            win={teams[1].win}
            team={participants.slice(5, 10)}
            participantIdentities={participantIdentities}
          />
        </div>
      </div>
    </div>
  );
}

function MatchList({ accountId }) {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.matchList,
    shallowEqual
  );

  const nextLoaded = useSelector(
    (rootReducer) => rootReducer.searchReducer.nextLoaded,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(matchList(accountId));
    window.addEventListener("scroll", () => {
      const nowPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const DocHeigth = document.body.scrollHeight;

      if (nowPosition + windowHeight === DocHeigth) {
        if (endIndex === 100) {
          alert("더 이상 가져올 수 없습니다.");
        } else {
          beginIndex += 5;
          endIndex += 5;
          dispatch(nextMatchList(accountId, beginIndex, endIndex));
        }
      }
    });
  }, [dispatch, accountId]);

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <section className={styles.MatchList}>
      {data.map((match) => (
        <Match key={match.gameId} {...match} />
      ))}
      {nextLoaded || <Loading />}
    </section>
  );
}

export default memo(MatchList);
