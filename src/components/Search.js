import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { inputed } from "../reducers/userReducer";

const SearchStyle = styled.form`
  input {
    width: 600px;
    height: 50px;
    border-radius: 5px;
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
    </SearchStyle>
  );
}
