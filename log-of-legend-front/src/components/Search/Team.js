import React from "react";
import styled from "styled-components";
import Champion from "./Champion";
import Spell from "./Spell";
import Items from "./Items";
import division, { championDivision, laneDivision } from "../../util/division";

const TeamStyle = styled.div`
  flex-grow: 1;

  .Team-division {
    color: ${(props) => (props.division === "BLUE" ? "blue" : "red")};
  }
  .Team-title {
  }
  .Team-entries {
    font-size: 0.7rem;
    div {
      .Team-under {
        display: flex;
      }
    }
  }
  @media (max-width: 340px) {
    .Team-entries {
      font-size: 0.5rem;
    }
  }
`;

function Team({ division, win, team, participantIdentities }) {
  return (
    <TeamStyle className="Team" division={division}>
      <div className="Team-title">
        <strong className="Team-division">{division} TEAM</strong>
        {win === "Win" ? <strong>승리</strong> : <strong>패배</strong>}
      </div>
      <div className="Team-entries">
        {team.map((participant) => (
          <div key={participant.participantId}>
            <div>
              <strong className="Team-summonerName">
                {
                  participantIdentities[participant.participantId - 1].player
                    .summonerName
                }
              </strong>
              <strong className="Team-kda">
                (
                {`${participant.stats.kills}/${participant.stats.deaths}/${participant.stats.assists}`}
                )
              </strong>
              <strong className="Team-kda-avg">
                {`KDA ${(
                  (participant.stats.kills + participant.stats.assists) /
                  participant.stats.deaths
                ).toFixed(1)}`}
              </strong>
            </div>
            <div className="Team-under">
              <strong className="Team-lane">
                {laneDivision[participant.timeline.lane]}
              </strong>
              <Champion championId={participant.championId} />
              <Spell
                spell1Id={participant.spell1Id}
                spell2Id={participant.spell2Id}
              />
              <Items {...participant.stats} />
            </div>
          </div>
        ))}
      </div>
    </TeamStyle>
  );
}

export default Team;
