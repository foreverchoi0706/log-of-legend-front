import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { search } from "../util/reducers/searchReducer";

import Poroading from "./Poroading";

const SearchStyle = styled.form`
  width: 600px;

  input {
    background-color: var(--theme-color-bg);
    box-sizing: border-box;
    border-radius: 5px;
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
    width: calc(100vw);
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

  const handleChange = (e) => {
    const keyword = e.target.value;
    if (keyword) {
      setIsInputed(true);
      dispatch(search(keyword));
    } else {
      setIsInputed(false);
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
        <div className="Search-inputed" onClick={() => setIsInputed("")}>
          {isSearched || <Poroading />}
          {isSearched &&
            data &&
            data.map((summoner) => (
              <div
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
              </div>
            ))}
        </div>
      )}
    </SearchStyle>
  );
}
