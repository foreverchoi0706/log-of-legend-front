import axios from "axios";

const DELOY_URL = "https://lol-api.foreverchoi0706.com";

const instance = axios.create({
  baseURL: DELOY_URL,
});

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

  nextMatchList: async (accountId, beginIndex, endIndex) => {
    const { data } = await instance.get("/search/next-match-list", {
      params: {
        accountId,
        beginIndex,
        endIndex,
      },
    });
    return data;
  },

  getChampions: async () => {
    const { data } = await instance.get(
      "https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json"
    );
    return data;
  },

  getDdragon: async () => {
    return {
      champions: await axios
        .get(
          "https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json"
        )
        .then((result) => result.data),
      spells: await axios
        .get(
          "https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/summoner.json"
        )
        .then((result) => result.data),
    };
  },
};

export default api;
