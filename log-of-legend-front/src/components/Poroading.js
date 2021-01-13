import React from "react";
import styled from "styled-components";

import poroading from "../img/poroading.png";

const PoroadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  img {
    width: 100px;
    animation: jump-anime 0.5s linear infinite;
  }

  @keyframes jump-anime {
    to {
      transform: translateY(10px);
    }
  }
`;

export default function Poroading() {
  return (
    <PoroadingStyle>
      <img src={poroading}></img>
      <strong>POROADING...</strong>
    </PoroadingStyle>
  );
}
