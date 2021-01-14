import React from "react";
import styled from "styled-components";

import Log from "./Log";

const LogListStyle = styled.section`
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

export default function LogList() {
  return (
    <LogListStyle>
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />

      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />

      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />

      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
    </LogListStyle>
  );
}