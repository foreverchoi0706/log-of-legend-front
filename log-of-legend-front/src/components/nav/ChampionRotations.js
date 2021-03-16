import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//components
import Loading from "../Loading";
//styles
import styles from "../../styles/navi/ChampionRotations.module.scss";
//reducer
import { getChampionRaotaions } from "../../util/reducers/navigationReducer";

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
      <div className={styles.ChampionRotations_container}>
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
      {modal.isClicked && (
        <div
          className={styles.ChampionRotations_champion}
          style={{
            backgroundImage: `linear-gradient(-0.25turn, rgba(0, 0, 0, 0),rgba(0, 0, 0, 1)), url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${modal.champion.id}_0.jpg)`,
          }}
          onClick={() => handleClick()}
        >
          <div>
            <h2>{`${modal.champion.name} - ${modal.champion.title}`}</h2>
            <div>
            {JSON.stringify(modal.champion.info)}
            {JSON.stringify(modal.champion.stats)}
            </div>
            <div>
            {modal.champion.stats.armor}
            </div>
          </div>
          <p>{modal.champion.blurb}</p>
        </div>
      )}
    </div>
  );
}

export default memo(ChampionRotations);
