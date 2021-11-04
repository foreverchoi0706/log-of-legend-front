const axios = require("axios");

const API_KEY = "";

const _instance = axios.create({
    baseURL: "https://kr.api.riotgames.com",
    headers: {
        "X-Riot-Token": API_KEY,
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
    },
});

const lor = {

};

module.exports = lor;