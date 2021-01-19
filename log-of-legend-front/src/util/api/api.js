import axios from "axios";

const URL = "https://log-of-legend.herokuapp.com/";

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

  searchSummoner: async (keyword) => {
    const { data } = await axios.get(
      `${URL}/summoner-info?summonerName=${keyword}`
    );
    return data;
  },
};

export default api;
