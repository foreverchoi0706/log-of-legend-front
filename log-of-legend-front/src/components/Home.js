import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import Search from "./Search";
import LogList from "./LogList/LogList";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";
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
