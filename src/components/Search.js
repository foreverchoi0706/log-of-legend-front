import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { inputed } from "../reducers/userReducer";
import Poroading from "./Poroading";

const SearchStyle = styled.form`
  input {
    width: 600px;
    height: 50px;
    border-radius: 5px;
  }
  .Search-inputed {
    margin: 0 auto;
    width: 600px;
    border-radius: 5px;
    background-color: white;
  }
`;

export default function Search() {
  const { isInputed } = useSelector(
    (rootReducer) => rootReducer.userReducer,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(inputed());
  };

  return (
    <SearchStyle>
      <input
        type="text"
        placeholder="소환사명을 입력해 주세요"
        onChange={handleChange}
      />
      {isInputed && (
        <div className="Search-inputed">
          <Poroading />
        </div>
      )}
    </SearchStyle>
  );
}
