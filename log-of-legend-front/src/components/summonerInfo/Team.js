import React from "react";
import { shallowEqual, useSelector } from "react-redux";
//components
import Champion from "./Champion";
import Spell from "./Spell";
import Items from "./Items";
//styles
import styles from "../../styles/summonerInfo/Team.module.scss";
//util
import { laneDivision } from "../../util/division";

function Team({ mapId, division, win, team, participantIdentities }) {
  const { data } = useSelector(
    (rootReducer) => rootReducer.ddragonReducer.ddragon,
    shallowEqual
  );

  return (
    <div className={styles.Team}>
      <div>
        <strong
          className="Team_title"
          style={{
            color: division === "BLUE" ? "blue" : "red",
          }}
        >
          {division} TEAM
        </strong>
        &nbsp;
        {win === "Win" ? <strong>승리</strong> : <strong>패배</strong>}
      </div>
      <div className={styles.Team_entries}>
        {team.map((participant) => (
          <div key={participant.participantId}>
            <div>
              <strong className="Team_summonerName">
                {
                  participantIdentities[participant.participantId - 1].player
                    .summonerName
                }
              </strong>
              <strong className="Team_kda">
                (
                {`${participant.stats.kills}/${participant.stats.deaths}/${participant.stats.assists}`}
                )
              </strong>
              <strong className="Team_kda_avg">
                {`KDA ${(
                  (participant.stats.kills + participant.stats.assists) /
                  participant.stats.deaths
                ).toFixed(1)}`}
              </strong>
            </div>
            <div className={styles.Team_under}>
              {mapId === 11 && (
                <img
                  className={styles.Team_lane}
                  src={laneDivision[participant.timeline.lane]}
                  alt={participant.timeline.lane}
                />
              )}
              <Champion
                champions={data.champions}
                championId={participant.championId}
              />
              <Spell
                spells={data.spells}
                spell1Id={participant.spell1Id}
                spell2Id={participant.spell2Id}
              />
              <Items {...participant.stats} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
