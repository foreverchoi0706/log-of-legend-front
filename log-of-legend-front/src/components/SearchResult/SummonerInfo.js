import React, { memo } from "react";
import styled from "styled-components";

import Summoner from "./Summoner";
import MatchList from "./MatchList";

const SummonerInfoStyle = styled.div``;

function SummonerInfo(summoner) {
  return (
    <SummonerInfoStyle>
      <Summoner {...summoner} />
      <MatchList {...summoner} />
    </SummonerInfoStyle>
  );
}

export default memo(SummonerInfo);
