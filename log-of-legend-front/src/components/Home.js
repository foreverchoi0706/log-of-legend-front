import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Banner from "./Banner";
import Search from "./Search";
import LogList from "./LogList";
import Footer from "./Footer";
import Navigation from "./Navigations/Navigation";
import ToTop from "./ToTop";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
  @media (max-width: 340px) {
    font-size: 0.5rem;
  }
`;

export default function Home() {
  const { isInputed } = useSelector(
    (rootReducer) => rootReducer.interfaceReducer.inputState,
    shallowEqual
  );

  return (
    <HomeStyle>
      <Banner />
      <Navigation />
      <Search />
      <LogList />
      <Footer />

      <ToTop />
    </HomeStyle>
  );
}
