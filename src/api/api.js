const axios = require("axios");

const API_KEY = "RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0";

const instance = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/",
  headers: {
    "X-Riot-Token": API_KEY,
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
  },
});

const instance2 = axios.create({
  baseURL: "https://asia.api.riotgames.com/lol/",
  headers: {
    "X-Riot-Token": API_KEY,
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
  },
});

const api = {
  async version() {
    const {
      data
    } = await instance.get("https://ddragon.leagueoflegends.com/api/versions.json");
    return data[0];
  },

  async championRotations() {

    const version = await instance.get("https://ddragon.leagueoflegends.com/api/versions.json");

    const {
      data: { freeChampionIds },
    } = await instance.get("/platform/v3/champion-rotations");
    const {
      data: { data },
    } = await instance.get(
      `http://ddragon.leagueoflegends.com/cdn/${version.data[0]}/data/ko_KR/champion.json`
    );

    const championKeys = Object.keys(data);
    const result = [];
    championKeys.map((championKey) => {
      freeChampionIds.filter((freeChampionId) => {
        if (data[championKey].key == freeChampionId) {
          result.push(data[championKey]);
        }
      });
    });
    return result;
  },

  async platformData() {
    const { data } = await instance.get("/status/v4/platform-data");
    return data;
  },

  async challengerRank() {
    const {
      data: { entries },
    } = await instance.get(
      "/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5"
    );

    for (let i = 0; i < entries.length; i++) {
      for (let j = i + 1; j < entries.length; j++) {
        if (entries[i].leaguePoints < entries[j].leaguePoints) {
          const temp = entries[i];
          entries[i] = entries[j];
          entries[j] = temp;
        }
      }
    }
    return entries;
  },

  async summonerInfo(summonerName) {
    const {
      data: { puuid, id, profileIconId, accountId, summonerLevel },
    } = await instance
      .get(`/summoner/v4/summoners/by-name/${summonerName}`)
      .catch((error) => {
        console.error(error);
      });
    const { data } = await instance.get(`/league/v4/entries/by-summoner/${id}`);
    data.forEach((info) => {
      info.puuid = puuid;
      info.accountId = accountId;
      info.summonerLevel = summonerLevel;
      info.profileIconId = profileIconId;
    });
    return data;
  },

  async matchList(puuid) {
    console.log("accountId:::", puuid);
    const matches = await instance2.get(
      `/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
    );
    const matchList = [];
    for (let i = 0; i < matches.data.length; i++) {
      const { data } = await instance2.get(
        `/match/v5/matches/${matches.data[i]}`
      );
      matchList.push(data.info);
    }
    return matchList;
  },

  async nextMatchList(puuid, beginIndex, endIndex) {
    const matches = await instance2.get(
      `/match/v5/matches/by-puuid/${puuid}/ids?start=${beginIndex}&count=${endIndex}`,
    );
    const matchList = [];
    for (let i = 0; i < matches.data.length; i++) {
      const { data } = await instance2.get(
        `/match/v5/matches/${matches.data[i]}`
      );
      matchList.push(data.info);
    }
    return matchList;
  },
};

module.exports = api;
