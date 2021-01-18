import React from "react";
import styled from "styled-components";

const MatchStyle = styled.div`
  height: 100px;

  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  border: 1px solid var(--theme-color-border);
  color: var(--theme-color-border);
`;

export default function Match() {
  return <MatchStyle>TESTESTESTSESTRE</MatchStyle>;
}
