import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Banner from "./Banner";
import Search from "./Search/Search";

import { init } from "../util/reducers/navigationReducer";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";
import ToTop from "./ToTop";
import SummonerInfo from "./Search/SummonerInfo";

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
  const [searchResult, setSearchResult] = useState({
    isClicked: false,
    summoner: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch, init]);

  const handleSearchResultClick = (summoner) => {
    setSearchResult({
      isClicked: true,
      summoner,
    });
  };

  return (
    <HomeStyle>
      <Banner />
      <Navigation />
      <Search handleSearchResultClick={handleSearchResultClick} />
      {searchResult.isClicked && <SummonerInfo {...searchResult.summoner} />}
      <Footer />
      <ToTop />
    </HomeStyle>
  );
}
