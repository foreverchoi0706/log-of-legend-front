const express = require("express");
const cors = require("cors");
const api = require("../api/api");

const navigation = express.Router();
navigation.use(cors());

navigation.get("/", (_, res) => res.send("navigation"));

navigation.get("/champion-rotations", async (_, res) => {
  res.send(await api.championRotations());
});

navigation.get("/challenger-rank", async (_, res) => {
  res.send(await api.challengerRank());
});

navigation.get("/platform-data", async (_, res) => {
  res.send(await api.platformData());
});

module.exports = navigation;
