const express = require("express");
const cors = require("cors");
const api = require("../api/api");
// const { default: axios } = require("axios");

const search = express.Router();

search.get("/", (_, res) => res.send("search"));

search.get("/summoner-info", async (req, res) => {
  const { summonerName } = req.query;
  res.send(await api.summonerInfo(encodeURI(summonerName)));
});

search.get("/match-list", async (req, res) => {
  const { puuid } = req.query;
  res.send(await api.matchList(puuid));
});

search.get("/next-match-list", async (req, res) => {
  const { puuid, beginIndex, endIndex } = req.query;
  if(endIndex == 100){
    res.end();
  }
  res.send(await api.nextMatchList(puuid, beginIndex, endIndex));
});

module.exports = search;
