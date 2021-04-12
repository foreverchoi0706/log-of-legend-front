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

const setStorage = (summonerName) => {
  if (localStorage.getItem("history") === null) {
    localStorage.setItem("history", JSON.stringify([summonerName]));
  } else {
    const history = JSON.parse(localStorage.getItem("history"));
    if (!history.includes(summonerName)) {
      if (history.length === 6) {
        history.pop();
      }
      history.unshift(summonerName);
      localStorage.setItem("history", JSON.stringify(history));
    }
  }
};

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
    setStorage(summoner.summonerName);
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
