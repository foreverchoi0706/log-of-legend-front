import React, { memo } from "react";
import styled from "styled-components";

import Match from "./Match";

const MatchListStyle = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    width: calc(100vw);
  }
  @media (max-width: 340px) {
  }
`;

function MatchList() {
  return (
    <MatchListStyle>
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
    </MatchListStyle>
  );
}

export default memo(MatchList);
