import React, { memo } from "react";
import styled from "styled-components";

import Summoner from "./Summoner";
import MatchList from "./MatchList";

const SummonerAndMatchListStyle = styled.div`
  width: 600px;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: calc(100vw);
  }
`;

function SummonerAndMatchList(summoner) {
  return (
    <SummonerAndMatchListStyle>
      <Summoner {...summoner} />
      <MatchList {...summoner} />
    </SummonerAndMatchListStyle>
  );
}

export default memo(SummonerAndMatchList);
