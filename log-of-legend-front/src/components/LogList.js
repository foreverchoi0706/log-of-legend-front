import React from "react";
import styled from "styled-components";

import Log from "./Log";

const LogListStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
