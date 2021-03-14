import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//components
import Loading from "../Loading";
//styles
import styles from "../../styles/navi/ChampionRotations.module.scss";
//reducer
import { getChampionRaotaions } from "../../util/reducers/navigationReducer";

function ChampionRotations() {
  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.championRotations,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChampionRaotaions());
  }, [dispatch, getChampionRaotaions]);

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
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={champion.name}
            />
          ))}
      </div>
    </div>
  );
}

export default memo(ChampionRotations);
