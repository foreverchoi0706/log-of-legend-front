import React from "react";
import styled from "styled-components";
import ChampionRotations from "./ChampionRotations";
import PlatformData from "./PlatformData";

const NavigationStyle = styled.nav`
  width: 600px;
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function Navigation() {
  return (
    <NavigationStyle>
      <PlatformData />
      <ChampionRotations />
    </NavigationStyle>
  );
}
