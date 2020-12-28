const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 3001;

const API_KEY = "RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0";

const KR_ROUTE = "https://kr.api.riotgames.com";

const CHAMPION_ROTATIONS = "/lol/platform/v3/champion-rotations";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.writeHead(200);
  res.write("log-of-legend back");
  res.end();
});

app.get("/championRotations", async (req, res) => {
  const URI = KR_ROUTE + CHAMPION_ROTATIONS;
  const championRotations = await axios.get(URI, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
  });
  const { data } = championRotations;
  res.send(data);
  res.end();
});

app.listen(PORT, () => {
  console.log(`log-of-legend back running on ${PORT}...`);
});
