import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { match } from "../../util/reducers/searchReducer";
import Loading from "../Loading";
import Items from "./Items";

const MatchStyle = styled.div`
  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--theme-color-border);
  .Match-container {
    margin: 15px;

    .Match-team {
      display: flex;

      .Match-blue {
        flex-grow: 1;
      }

      .Match-red {
        flex-grow: 1;
      }
    }
  }
`;

function Match({ gameId }) {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.match,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(match(gameId));
  }, [dispatch]);

  const getGameDuration = (gameDuration) => {
    const minites = 60;
    return `${Math.ceil(gameDuration / minites)}분${gameDuration % minites}초`;
  };

  const getGameCreation = (gameCreation) => {
    const day = 86400000;
    return `${Math.ceil((new Date().getTime() - gameCreation) / day)}일전`;
  };

  if (!isLoaded) {
    return <Loading />;
  }

  const { teams, participants, participantIdentities } = data;

  return (
    <MatchStyle>
      <div className="Match-container">
        <div className="Match-team">
          <div className="Match-blue">
            {teams[0].win === "Win" ? (
              <strong>승리</strong>
            ) : (
              <strong>패배</strong>
            )}
            <strong style={{ color: "blue" }}>BLUE TEAM</strong>

            <div className="Match-entries">
              {participants.slice(0, 5).map((participant) => (
                <div>
                  <strong>
                    {
                      participantIdentities[participant.participantId - 1]
                        .player.summonerName
                    }
                  </strong>
                  <Items {...participant.stats} />
                </div>
              ))}
            </div>
          </div>

          <div className="Match-red">
            {teams[1].win === "Win" ? (
              <strong>승리</strong>
            ) : (
              <strong>패배</strong>
            )}
            <strong style={{ color: "red" }}>RED TEAM</strong>
            <div className="Match-entries">
              {participants.slice(5, 10).map((participant) => (
                <div>
                  {
                    participantIdentities[participant.participantId - 1].player
                      .summonerName
                  }
                  <Items {...participant.stats} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MatchStyle>
  );
}

export default Match;
