import React, { memo } from "react";

import styled from "styled-components";

import Team from "./Team";

const MatchStyle = styled.div`
  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--theme-color-border);
  .Match-container {
    margin: 15px;
    .Match-haed {
      display: flex;
      justify-content: space-between;
      .Match-map {
        width: 40px;
      }
    }
    .Match-teams {
      display: flex;
    }
  }

  @media (max-width: 340px) {
    .Match-container {
      margin: 10px;
    }
  }
`;

function Match({
  mapId,
  gameDuration,
  gameCreation,
  teams,
  participants,
  participantIdentities,
}) {
  const getGameDuration = (gameDuration) => {
    const minites = 60;
    return `${Math.ceil(gameDuration / minites)}분${gameDuration % minites}초`;
  };

  const getGameCreation = (gameCreation) => {
    const day = 86400000;
    return `${Math.ceil((new Date().getTime() - gameCreation) / day)}일전`;
  };

  return (
    <MatchStyle>
      <div className="Match-container">
        <div className="Match-haed">
          <img
            className="Match-map"
            src={`https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${mapId}.png`}
            alt="map"
          />
          <div>
            <strong>{getGameDuration(gameDuration)}</strong>
            <br />
            <strong>{getGameCreation(gameCreation)}</strong>
          </div>
        </div>
        <hr />
        <div className="Match-teams">
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
    </MatchStyle>
  );
}

export default memo(Match);
