import React from "react";
import styled from "styled-components";
import ChampionRotations from "./ChampionRotations";

const NavigationStyle = styled.nav`
  width: 600px;
  color: white;
  display: flex;
  details {
    font-size: 0.8rem;
    flex-grow: 1;
    summary{
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
        <summary>챔피언 로테이션</summary>
        <ChampionRotations />
      </details>
      <details>
        <summary>챔피언 로테이션</summary>
        <ChampionRotations />
      </details>
      <details>
        <summary>챔피언 로테이션</summary>
        <ChampionRotations />
      </details>
    </NavigationStyle>
  );
}
