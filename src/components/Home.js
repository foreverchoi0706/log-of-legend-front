import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Banner from "./Banner";
import Search from "./Search";
import LogList from "./LogList";
import Poroading from "./Poroading";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 100vh;
`;

export default function Home() {
  const { isInputed } = useSelector(
    (rootReducer) => rootReducer.userReducer,
    shallowEqual
  );

  return (
    <HomeStyle>
      <Banner />
      <Search />
      {/* <LogList /> */}
    </HomeStyle>
  );
}
