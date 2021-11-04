const axios = require("axios");

const API_KEY = "RGAPI-845a0afe-1610-4bdc-86f0-9d211542646b";

const _instance = axios.create({
    baseURL: "https://kr.api.riotgames.com",
    headers: {
        "X-Riot-Token": API_KEY,
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
    },
});

const lol = {

};

module.exports = lol;