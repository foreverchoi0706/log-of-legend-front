const express = require("express");
const cors = require("cors");
const api = require("../api/api");
// const { default: axios } = require("axios");

const search = express.Router();
search.use(cors());

//헤로쿠 배포시 속도향상을 위한 정기적 요청
// setInterval(async () => {
//   await axios.get("https://log-of-legend.herokuapp.com");
//   console.log("heroku is running...");
// }, 600000);

search.get("/", (_, res) => res.send("search"));

search.get("/summoner-info", async (req, res) => {
  const { summonerName } = req.query;
  res.send(await api.summonerInfo(encodeURI(summonerName)));
});

search.get("/match-list", async (req, res) => {
  const { accountId } = req.query;
  res.send(await api.matchList(accountId));
});

search.get("/next-match-list", async (req, res) => {
  const { accountId, beginIndex, endIndex } = req.query;
  res.send(await api.nextMatchList(accountId, beginIndex, endIndex));
});

module.exports = search;
