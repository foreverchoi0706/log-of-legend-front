import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Banner from "./Banner";
import ChampionRotations from "./ChampionRotations";
import Search from "./Search";
import LogList from "./LogList";
import Poroading from "./Poroading";
import Footer from "./Footer";
import Navigation from "./Navigation";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 100vh;
`;

export default function Home() {
  const { isInputed } = useSelector(
    (rootReducer) => rootReducer.interfaceReducer.inputState,
    shallowEqual
  );

  return (
    <HomeStyle>
      <Banner />
      <Navigation/>
      <Search />
      {/* <LogList /> */}
      <Footer />
    </HomeStyle>
  );
}
