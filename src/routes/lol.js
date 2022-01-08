const { Router } = require("express");
const axios = require("axios");

const API_KEY = "RGAPI-845a0afe-1610-4bdc-86f0-9d211542646b";

const _instance = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol",
  headers: {
    "X-Riot-Token": API_KEY,
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
  },
});

const router = Router();

/**@platformData */
router.get("/platformData", async (_, res) => {
  const { data } = await _instance.get("/status/v4/platform-data");
  return res.status(200).json(data);
});

/**@version */
router.get("/version", async (_, res) => {
  const { data } = await _instance.get(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  return res.status(200).json(data[0]);
});

/**@championRotations */
router.get("/championRotations", async (_, res) => {
  const version = await _instance.get(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const {
    data: { freeChampionIds },
  } = await _instance.get("/platform/v3/champion-rotations");
  const {
    data: { data },
  } = await _instance.get(
    `http://ddragon.leagueoflegends.com/cdn/${version.data[0]}/data/ko_KR/champion.json`
  );

  const championKeys = Object.keys(data);
  const result = [];
  championKeys.map((championKey) => {
    freeChampionIds.filter((freeChampionId) => {
      if (+data[championKey].key === freeChampionId) {
        result.push(data[championKey]);
      }
    });
  });
  return res.status(200).json(result);
});

/**@ranked */
router.get("/ranked", async (_, res) => {
  const {
    data: { entries },
  } = await _instance.get(
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
  return res.status(200).json(entries);
});

/**@summonerInfo */
router.get("/", async (summonerName) => {
  const {
    data: { puuid, id, profileIconId, accountId, summonerLevel },
  } = await _instance
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
  return res.status(200).json(data);
});

/**@matchList */
router.get("/matchList", async (puuid) => {
  const matches = await _instance.get(
    `/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`
  );
  const matchList = [];
  for (let i = 0; i < matches.data.length; i++) {
    const { data } = await _instance.get(
      `/match/v5/matches/${matches.data[i]}`
    );
    matchList.push(data.info);
  }
  return res.status(200).json(matchList);
});

module.exports = router;
