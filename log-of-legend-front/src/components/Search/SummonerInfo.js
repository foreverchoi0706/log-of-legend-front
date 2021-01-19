import React, { memo } from "react";
import styled from "styled-components";

import Summoner from "./Summoner";
import MatchList from "./MatchList";

const SummonerInfoStyle = styled.div`
  width: 600px;

  box-sizing: border-box;

  border-radius: 5px;

  @media (max-width: 600px) {
    width: calc(100vw);
  }
`;

function SummonerInfo(summoner) {
  return (
    <SummonerInfoStyle>
      <Summoner {...summoner} />
      <MatchList {...summoner} />
    </SummonerInfoStyle>
  );
}

export default memo(SummonerInfo);
