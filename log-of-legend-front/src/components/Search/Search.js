import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { search } from "../../util/reducers/searchReducer";

import Loading from "../Loading";

const SearchStyle = styled.form`
  width: 600px;

  input {
    background-color: var(--theme-color-bg);
    box-sizing: border-box;
    border: 1px solid var(--theme-color-border);
    color: var(--theme-color-border);

    width: inherit;
    height: 50px;
  }
  .Search-inputed {
    background-color: var(--theme-color-bg);
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--theme-color-border);
    border-top: none;
    color: var(--theme-color-border);

    width: inherit;

    .Search-result {
      padding: 15px;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 10px;
      .Search-profile {
        width: 50px;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    input {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 340px) {
    input {
      font-size: 0.5rem;
    }
  }
`;

export default function Search({ handleSearchResultClick }) {
  const { isSearched, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.result,
    shallowEqual
  );
  const [isInputed, setIsInputed] = useState(false);

  const dispatch = useDispatch();

  const setTrue = (e, summonerName) => {
    dispatch(search(summonerName));
    e.target.style.borderBottom = "none";
    e.target.style.borderRadius = "5px 5px 0 0";
    setIsInputed(true);
  };

  const setFalse = (e) => {
    e.target.style.borderBottom = "1px solid var(--theme-color-border)";
    e.target.style.borderRadius = "5px";
    setIsInputed(false);
  };

  const handleChange = (e) => {
    const summonerName = e.target.value;
    if (summonerName) {
      setTrue(e, summonerName);
    } else {
      setFalse(e);
    }
  };

  return (
    <SearchStyle>
      <input
        type="text"
        placeholder=" 소환사명을 입력해 주세요"
        onChange={handleChange}
      />
      {isInputed && (
        <div className="Search-inputed">
          {isSearched || <Loading />}
          {isSearched &&
            data &&
            data.map((summoner, index) => (
              <div
                key={index}
                className="Search-result"
                onClick={() => handleSearchResultClick(summoner)}
              >
                <img
                  className="Search-profile"
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
    </SearchStyle>
  );
}
