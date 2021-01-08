import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ChampionRotations from "./ChampionRotations";
import PlatformData from "./PlatformData";
import { clicked } from "../reducers/interfaceReducer";

const NavigationStyle = styled.nav`
  width: 600px;
  color: white;
  display: flex;
  flex-direction: column;
  .Navigation-menu {
    display: flex;
    button {
      cursor: pointer;
      flex-grow: 1;
    }
  }
  .Navigation-show {
    animation: show-anime 1s linear;
  }
  @keyframes show-anime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function Navigation() {
  const { championRotations, nowRanking, platformData } = useSelector(
    (rootReducer) => rootReducer.interfaceReducer.navState,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(clicked(e.target.name));
  };

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
        {nowRanking && <div>nowRanking</div>}
        {platformData && <PlatformData/>}
      </div>
    </NavigationStyle>
  );
}
