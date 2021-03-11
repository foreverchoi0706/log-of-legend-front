import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

let URL = "https://log-of-legend.herokuapp.com";

const api = {
  getChampionRotations: async () => {
    const { data } = await instance.get("/navigation/champion-rotations");
    return data;
  },

  getChallengerRank: async () => {
    const { data } = await instance.get("/navigation/challenger-rank");
    return data;
  },

  getPlatformData: async () => {
    const { data } = await instance.get("/navigation/platform-data");
    return data;
  },

  summonerInfo: async (summonerName) => {
    const { data } = await instance.get("/search/summoner-info", {
      params: {
        summonerName,
      },
    });
    return data;
  },
  matchList: async (accountId) => {
    const { data } = await instance.get("/search/match-list", {
      params: {
        accountId,
      },
    });
    return data;
  },
  match: async (gameId) => {
    const { data } = await instance.get("${URL}/search//match", {
      params: {
        gameId,
      },
    });
    return data;
  },
};

export default api;
