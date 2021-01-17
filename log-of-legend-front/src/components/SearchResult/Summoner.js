import React, { useState, memo } from "react";
import styled from "styled-components";

const SummonerStyle = styled.div``;

function Summoner(summoner) {
  return <div>{summoner.summonerName}</div>;
}

export default memo(Summoner);
