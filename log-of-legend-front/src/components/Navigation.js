import React from "react";
import styled from "styled-components";
import ChampionRotations from "./ChampionRotations";
import PlatformData from "./PlatformData";

const NavigationStyle = styled.nav`
  width: 600px;
  color: white;
  display: flex;
  details {
    font-size: 0.8rem;
    text-align : center;
    width: 150px;
    summary {
      display: inline;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function Navigation() {
  return (
    <NavigationStyle>
      <details>
        <summary>챔피언 로테이션</summary>
        <ChampionRotations />
      </details>
      <details>
        <summary>서버 상태</summary>
        <PlatformData />
      </details>
      <details>
        <summary>empty</summary>
      </details>
      <details>
        <summary>empty</summary>
      </details>
    </NavigationStyle>
  );
}
