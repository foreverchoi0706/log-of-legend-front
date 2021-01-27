import React, { memo, useState } from "react";
import styled from "styled-components";
import ChallengerRank from "./ChallengerRank";
import ChampionRotations from "./ChampionRotations";
import PlatformData from "./PlatformData";

const NavigationStyle = styled.nav`
  width: 600px;
  display: flex;
  flex-direction: column;

  background-color: var(--theme-color-bg);
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;

  color: var(--theme-color-border);

  .Navigation-menu {
    display: flex;
    button {
      all: initial;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      flex-grow: 1;
      cursor: pointer;

      background-color: var(--theme-color-bg);
      box-sizing: border-box;
      border-radius: 5px 5px 0px 0px;
      border: 1px solid var(--theme-color-border);
      color: var(--theme-color-border);
    }
  }
  .Navigation-show {
    border: 1px solid var(--theme-color-border);
    border-radius: 0 0 5px 5px;
    border-top: none;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
  @media (max-width: 340px) {
    .Navigation-menu {
      button {
        font-size: 0.5rem;
      }
    }
  }
`;

function Navigation() {
  const initState = {
    championRotations: false,
    nowRanking: false,
    platformData: false,
  };

  const [isClicked, setIsClicked] = useState(initState);

  const handleClick = (e) => {
    const buttons = e.target.parentElement.childNodes;
    buttons.forEach((button) => {
      button.style.borderBottom = "1px solid var(--theme-color-border)";
    });
    e.target.style.borderBottom = "none";
    setIsClicked({
      [e.target.name]: !isClicked[e.target.name],
    });
  };

  const { championRotations, nowRanking, platformData } = isClicked;

  return (
    <NavigationStyle>
      <div className="Navigation-menu">
        <button name="championRotations" onClick={handleClick}>
          금주의 챔피언 로테이션
        </button>
        <button name="nowRanking" onClick={handleClick}>
          현재 챌린저 랭킹 순위
        </button>
        <button name="platformData" onClick={handleClick}>
          서버 상태
        </button>
      </div>
      <div className="Navigation-show">
        {championRotations && <ChampionRotations />}
        {nowRanking && <ChallengerRank />}
        {platformData && <PlatformData />}
      </div>
    </NavigationStyle>
  );
}
export default memo(Navigation);
