import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { inputed,unInputed } from "../reducers/interfaceReducer";
import Poroading from "./Poroading";

const SearchStyle = styled.form`
  width: 600px;
  input {
    width: inherit;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 0;
  }
  .Search-inputed {
    width: inherit;
    border-radius: 0 0 5px 5px;
    background-color: white;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export default function Search() {
  const { isInputed } = useSelector(
    (rootReducer) => rootReducer.interfaceReducer.inputState,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.target.value ? dispatch(inputed()) : dispatch(unInputed());
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
          <Poroading />
        </div>
      )}
    </SearchStyle>
  );
}
