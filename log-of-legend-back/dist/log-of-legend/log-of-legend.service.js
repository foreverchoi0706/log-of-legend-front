"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOfLegendService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const API_KEY = 'RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0';
const config = {
    headers: {
        'X-Riot-Token': API_KEY,
    },
};
let LogOfLegendService = class LogOfLegendService {
    async championRotations() {
        const { data: { freeChampionIds }, } = await axios_1.default.get('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', config);
        const { data: { data }, } = await axios_1.default.get('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/ko_KR/champion.json');
        const championKeys = Object.keys(data);
        const result = [];
        championKeys.map((championKey) => {
            freeChampionIds.filter((freeChampionId) => {
                if (data[championKey].key == freeChampionId) {
                    result.push(data[championKey]);
                }
            });
        });
        return result;
    }
    async platformData() {
        const { data } = await axios_1.default.get('https://kr.api.riotgames.com/lol/status/v4/platform-data', config);
        return data;
    }
    async challengerRank() {
        const { data: { entries }, } = await axios_1.default.get('https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5', config);
        for (let i = 0; i < entries.length; i++) {
            for (let j = i + 1; j < entries.length; j++) {
                if (entries[i].leaguePoints < entries[j].leaguePoints) {
                    const temp = entries[i];
                    entries[i] = entries[j];
                    entries[j] = temp;
                }
            }
        }
        return entries;
    }
    async summonerInfo(summonerName) {
        const { data: { id, profileIconId }, } = await axios_1.default.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, config);
        const { data } = await axios_1.default.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`, config);
        const championMastery = await axios_1.default.get(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, config);
        for (let i = 0; i < championMastery.data.length; i++) {
            for (let j = i + 1; j < championMastery.data.length; j++) {
                if (championMastery.data[i].lastPlayTime <
                    championMastery.data[j].lastPlayTime) {
                    const temp = championMastery.data[i];
                    championMastery.data[i] = championMastery.data[j];
                    championMastery.data[j] = temp;
                }
            }
        }
        const sortedchampionMastery = championMastery.data.slice(0, 10);
        for (let i = 0; i < sortedchampionMastery.length; i++) {
            for (let j = i + 1; j < sortedchampionMastery.length; j++) {
                if (sortedchampionMastery[i].championLevel <
                    sortedchampionMastery[j].championLevel) {
                    const temp = sortedchampionMastery[i];
                    sortedchampionMastery[i] = sortedchampionMastery[j];
                    sortedchampionMastery[j] = temp;
                }
            }
        }
        data[0].profileIconId = profileIconId;
        data[0].championMastery = sortedchampionMastery;
        return data;
    }
    async matchList(accountId) {
        const { data } = await axios_1.default.get(`https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`, config);
        return data;
    }
};
LogOfLegendService = __decorate([
    common_1.Injectable()
], LogOfLegendService);
exports.LogOfLegendService = LogOfLegendService;
//# sourceMappingURL=log-of-legend.service.js.map