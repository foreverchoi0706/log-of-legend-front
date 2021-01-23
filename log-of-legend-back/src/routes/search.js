const express = require("express");
const cors = require("cors");
const api = require("../api/api");
const { default: axios } = require("axios");

const search = express.Router();
search.use(cors());

setInterval(async () => {
  await axios.get("https://log-of-legend.herokuapp.com");
  console.log("heroku is running...");
}, 600000);

search.get("/", (_, res) => res.send("search"));

search.get("/summoner-info", async (req, res) => {
  const { summonerName } = req.query;
  res.send(await api.summonerInfo(encodeURI(summonerName)));
});

search.get("/match-list", async (req, res) => {
  const { accountId } = req.query;
  res.send(await api.matchList(accountId));
});

module.exports = search;
