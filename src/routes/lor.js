const { Router } = require("express");
const axios = require("axios");

const API_KEY = "RGAPI-bbb6eda9-9991-4580-8ddb-8a42f3cfe7da";

const _instance = axios.create({
  baseURL: "https://asia.api.riotgames.com/lor",
  headers: {
    "X-Riot-Token": API_KEY,
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    Origin: "https://developer.riotgames.com",
  },
});

const router = Router();

/**@platformData */
router.get("/platformData", async (_, res) => {
  const { data } = await _instance.get("/status/v1/platform-data");
  return res.status(200).json(data);
});

/**@ranked */
router.get("/ranked", async (_, res) => {
  const {
    data: { players },
  } = await _instance.get("/ranked/v1/leaderboards");
  return res.status(200).json(players);
});

/**@match */
router.get("/match", async (req, res) => {
  const { puuid } = req.query;

  const { data } = await _instance.get(
    `/match/v1/matches/by-puuid/SC-gUhqQWA8gspFj0FFzBrB8mQhs97gEBJ6_Yn5k2tFA7WGMlfBDSOO8fVqxtu8BsjububMIIo4lcg/ids`
  );

  return res.status(200).json(data);
});

module.exports = router;
