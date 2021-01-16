import axios from "axios";

const HOST = "http://localhost:3000/log-of-legend";

const lolAPI = {
  getChampionRotations: async () => {
    const { data } = await axios.get(`${HOST}/champion-rotations`);
    return data;
  },

  getChallengerRank: async () => {
    const { data } = await axios.get(`${HOST}/challenger-rank`);
    return data;
  },

  getPlatformData: async () => {
    const { data } = await axios.get(`${HOST}/platform-data`);
    return data;
  },

  searchSummoner: async (keyword) => {
    const { data } = await axios.get(
      `${HOST}/summoner-info?summonerName=${keyword}`
    );
    return data;
  },
};

export default lolAPI;
