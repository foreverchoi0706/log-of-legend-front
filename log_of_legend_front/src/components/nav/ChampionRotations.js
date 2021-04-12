import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//components
import Loading from "../Loading";
//styles
import styles from "../../styles/nav/ChampionRotations.module.scss";
//images
import attack from "../../images/info/attack.png";
import defense from "../../images/info/defense.png";
import difficulty from "../../images/info/difficulty.png";
import magic from "../../images/info/magic.png";
//reducer
import { getChampionRaotaions } from "../../util/reducers/navigationReducer";
//division
import { tagDivision } from "../../util/division";

function ChampionRotations() {
  const [modal, setModal] = useState({
    isClicked: false,
    champion: null,
  });

  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.championRotations,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChampionRaotaions());
  }, [dispatch, getChampionRaotaions]);

  const handleClick = (champion) => {
    setModal({
      isClicked: !modal.isClicked,
      champion,
    });
  };

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div className={styles.ChampionRotations}>
      {modal.isClicked ? (
        <div
          className={styles.ChampionRotations_champion}
          style={{
            backgroundImage: `linear-gradient(-0.25turn, rgba(0, 0, 0, 0),rgba(0, 0, 0, 1)), url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${modal.champion.id}_0.jpg)`,
          }}
          onClick={() => handleClick()}
        >
          <div>
            <h2
              className={styles.ChampionRotations_champion_name}
            >{`${modal.champion.name} - ${modal.champion.title}`}</h2>
            <div className={styles.ChampionRotations_champion_tag}>
              {modal.champion.tags.map((tag, index) => (
                <strong key={index}>
                  {tagDivision[tag]}
                  {modal.champion.tags.length - 1 !== index && ","}
                </strong>
              ))}
            </div>
            <div className={styles.ChampionRotations_champion_info}>
              <img src={attack} />
              &nbsp;{modal.champion.info.attack}
            </div>
            <div className={styles.ChampionRotations_champion_info}>
              <img src={defense} />
              &nbsp;{modal.champion.info.defense}
            </div>
            <div className={styles.ChampionRotations_champion_info}>
              <img src={difficulty} />
              {modal.champion.info.difficulty}
            </div>
            <div className={styles.ChampionRotations_champion_info}>
              <img src={magic} />
              {modal.champion.info.magic}
            </div>
          </div>
          <div className={styles.ChampionRotations_champion_blurb}>
            {modal.champion.blurb}
          </div>
        </div>
      ) : (
        <div className={styles.ChampionRotations_list}>
          {isLoaded &&
            data.map((champion) => (
              <img
                key={champion.key}
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt={champion.name}
                onClick={() => handleClick(champion)}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default memo(ChampionRotations);
