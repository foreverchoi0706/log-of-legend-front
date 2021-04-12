import React, { useState, memo } from "react";
//components
import ChallengerRank from "./nav/ChallengerRank";
import ChampionRotations from "./nav/ChampionRotations";
import PlatformData from "./nav/PlatformData";
//styles
import styles from "../styles/Nav.module.scss";

function Nav() {
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
    <nav className={styles.Nav}>
      <div className={styles.Nav_menus}>
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
      <div className={styles.Nav_show}>
        {championRotations && <ChampionRotations />}
        {nowRanking && <ChallengerRank />}
        {platformData && <PlatformData />}
      </div>
    </nav>
  );
}
export default memo(Nav);
