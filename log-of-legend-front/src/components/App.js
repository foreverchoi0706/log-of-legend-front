import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//components
import Banner from "./Banner";
import Nav from "./Nav";
import Search from "./Search";
import SummonerInfo from "./SummonerInfo";
import Footer from "./Footer";
import ToTop from "./ToTop";
//styles
import "../styles/App.scss";
//util
import { getDdragon } from "../util/reducers/ddragonReducer";

function App() {
  const [searchResult, setSearchResult] = useState({
    isClicked: false,
    summoner: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDdragon());
  }, [getDdragon]);

  const handleSearchResultClick = (summoner) => {
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

export default App;
