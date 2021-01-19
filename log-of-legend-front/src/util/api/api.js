import axios from "axios";

const URL = "https://log-of-legend.herokuapp.com";

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
};

export default api;
