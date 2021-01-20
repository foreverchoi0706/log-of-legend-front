import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { match } from "../../util/reducers/searchReducer";
import Loading from "../Loading";
import Team from "./Team";

const MatchStyle = styled.div`
  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--theme-color-border);
  .Match-container {
    margin: 15px;
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
        <div className="Match-teams">
          <Team
            division={"BLUE"}
            win={teams[0].win}
            team={participants.slice(0, 5)}
            participantIdentities={participantIdentities}
          />

          <Team
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

export default Match;
