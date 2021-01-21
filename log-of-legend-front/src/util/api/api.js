import axios from "axios";

let URL = "https://log-of-legend.herokuapp.com";

// URL = "http://localhost:3000";

const api = {
  getChampionRotations: async () => {
    const { data } = await axios.get(`${URL}/navigation/champion-rotations`);
    return data;
  },

  getChallengerRank: async () => {
    const { data } = await axios.get(`${URL}/navigation/challenger-rank`);
    return data;
  },

  getPlatformData: async () => {
    const { data } = await axios.get(`${URL}/navigation/platform-data`);
    return data;
  },

  summonerInfo: async (summonerName) => {
    const { data } = await axios.get(
      `${URL}/search/summoner-info?summonerName=${summonerName}`
    );
    return data;
  },
  matchList: async (accountId) => {
    const { data } = await axios.get(
      `${URL}/search/match-list?accountId=${accountId}`
    );
    return data;
  },
  match: async (gameId) => {
    const { data } = await axios.get(`${URL}/search//match?gameId=${gameId}`);
    return data;
  },
};

export default api;
