import React, { useState } from "react";
//components
import Banner from "./Banner";
import Nav from "./Nav";
import Search from "./Search";
import SummonerInfo from "./Search/SummonerInfo";
import Footer from "./Footer";
import ToTop from "./ToTop";
//styles
import "../styles/App.scss";

export default function App() {
  const [searchResult, setSearchResult] = useState({
    isClicked: false,
    summoner: null,
  });

  const handleSearchResultClick = (summoner) => {
    console.log(process.env.REACT_APP_LOGGER);
    setSearchResult({
      isClicked: true,
      summoner,
    });
  };

  return (
    <div className="App">
      <Banner />
      <Nav />
      <Search handleSearchResultClick={handleSearchResultClick} />
      {searchResult.isClicked && <SummonerInfo {...searchResult.summoner} />}
      <Footer />
      <ToTop />
    </div>
  );
}
