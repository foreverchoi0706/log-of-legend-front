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
  const { accountId } = req.query;
  res.send(await api.matchList(accountId));
});

search.get("/next-match-list", async (req, res) => {
  const { accountId, beginIndex, endIndex } = req.query;
  res.send(await api.nextMatchList(accountId, beginIndex, endIndex));
});

module.exports = search;
