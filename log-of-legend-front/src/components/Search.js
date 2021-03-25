import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//components
import Loading from "./Loading";
//styles
import styles from "../styles/Search.module.scss";
//reducers
import { search } from "../util/reducers/searchReducer";

function Search({ handleSearchResultClick }) {
  const { isSearched, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.summoner,
    shallowEqual
  );
  const [isInputed, setIsInputed] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (summonerName) => {
    if (summonerName) {
      dispatch(search(summonerName));
      setIsInputed(true);
    } else {
      setIsInputed(false);
    }
  };

  return (
    <form className={styles.Search}>
      <input
        type="text"
        placeholder=" 소환사명을 입력해 주세요"
        onChange={(e) => handleChange(e.target.value)}
      />
      <section className={styles.Search_history}>
        {localStorage.getItem("history") &&
          JSON.parse(localStorage.getItem("history")).map((summonerName) => (
            <span onClick={(e) => handleChange(e.target.innerHTML)}>
              {summonerName}
            </span>
          ))}
      </section>
      {isInputed && (
        <div className={styles.Search_inputed}>
          {isSearched || <Loading />}
          {isSearched &&
            data &&
            data.map((summoner, index) => (
              <div
                key={index}
                className={styles.Search_result}
                onClick={() => handleSearchResultClick(summoner)}
              >
                <img
                  className={styles.Search_profile}
                  src={`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/${
                    summoner.profileIconId ? summoner.profileIconId : 0
                  }.png`}
                />
                <strong>{summoner.summonerName}</strong>
                <i>{`${summoner.tier}.${summoner.rank}`}</i>
                <strong>({summoner.queueType})</strong>
              </div>
            ))}
        </div>
      )}
    </form>
  );
}

export default Search;
