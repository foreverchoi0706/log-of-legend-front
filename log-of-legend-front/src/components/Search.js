import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { search } from "../reducers/searchReducer";

import Poroading from "./Poroading";

const SearchStyle = styled.form`
  width: 600px;

  input {
    background-color: rgb(20, 20, 20);
    color: white;
    width: inherit;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0;
  }
  .Search-inputed {
    background-color: rgb(20, 20, 20);
    color: white;
    width: inherit;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 0 0 5px 5px;
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

export default function Search() {
  const [isInputed, setIsInputed] = useState(false);

  const { isSearched, data } = useSelector(
    (rootReducer) => rootReducer.searchReducer.result,
    shallowEqual
  );

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

      <div className="Search-inputed">
        {isInputed && (
          <>
            {isSearched || <Poroading />}
            {isSearched && <div>{JSON.stringify(data)}</div>}{" "}
          </>
        )}
      </div>
    </SearchStyle>
  );
}
