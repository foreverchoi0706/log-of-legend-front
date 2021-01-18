import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';
import { challengerRank } from './dto/challengerRank.doto';

const API_KEY = 'RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0';

const config = {
  headers: {
    'X-Riot-Token': API_KEY,
  },
};

@Injectable()
export class LogOfLegendService {
  async championRotations(): Promise<championRotationsDto[]> {
    const {
      data: { freeChampionIds },
    } = await axios.get(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
      config,
    );
    const {
      data: { data },
    } = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/10.25.1/data/ko_KR/champion.json',
    );

    const championKeys = Object.keys(data);
    const result: championRotationsDto[] = [];
    championKeys.map((championKey) => {
      freeChampionIds.filter((freeChampionId) => {
        if (data[championKey].key == freeChampionId) {
          result.push(data[championKey]);
        }
      });
    });
    return result;
  }

  async platformData(): Promise<platformData> {
    const { data } = await axios.get(
      'https://kr.api.riotgames.com/lol/status/v4/platform-data',
      config,
    );
    return data;
  }

  async challengerRank(): Promise<challengerRank> {
    const {
      data: { entries },
    } = await axios.get(
      'https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5',
      config,
    );

    for (let i: number = 0; i < entries.length; i++) {
      for (let j: number = i + 1; j < entries.length; j++) {
        if (entries[i].leaguePoints < entries[j].leaguePoints) {
          const temp = entries[i];
          entries[i] = entries[j];
          entries[j] = temp;
        }
      }
    }
    return entries;
  }

  async summonerInfo(summonerName: string): Promise<summoner[]> {
    const {
      data: { id, profileIconId },
    } = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      config,
    );
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,
      config,
    );

    const championMastery = await axios.get(
      `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
      config,
    );

    for (let i: number = 0; i < championMastery.data.length; i++) {
      for (let j: number = i + 1; j < championMastery.data.length; j++) {
        if (
          championMastery.data[i].lastPlayTime <
          championMastery.data[j].lastPlayTime
        ) {
          const temp = championMastery.data[i];
          championMastery.data[i] = championMastery.data[j];
          championMastery.data[j] = temp;
        }
      }
    }
    const sortedchampionMastery = championMastery.data.slice(0, 10);
    for (let i: number = 0; i < sortedchampionMastery.length; i++) {
      for (let j: number = i + 1; j < sortedchampionMastery.length; j++) {
        if (
          sortedchampionMastery[i].championLevel <
          sortedchampionMastery[j].championLevel
        ) {
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

  async matchList(accountId: number): Promise<any> {
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`,
      config,
    );

    return data;
  }
}
