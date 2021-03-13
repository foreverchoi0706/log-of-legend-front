import React, { useState } from "react";
//components
import Banner from "./Banner";
import Search from "./Search/Search";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";
import ToTop from "./ToTop";
import SummonerInfo from "./Search/SummonerAndMatchList";
//styles
import "../styles/App.scss";

export default function Home() {
  const [searchResult, setSearchResult] = useState({
    isClicked: false,
    summoner: null,
  });

  const handleSearchResultClick = (summoner) => {
    setSearchResult({
      isClicked: true,
      summoner,
    });
  };

  return (
    <div className="App">
      <Banner />
      <Navigation />
      <Search handleSearchResultClick={handleSearchResultClick} />
      {searchResult.isClicked && <SummonerInfo {...searchResult.summoner} />}
      <Footer />
      <ToTop />
    </div>
  );
}
