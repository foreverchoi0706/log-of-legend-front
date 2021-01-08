import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';

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

  async summoner(summonerName: string): Promise<summoner[]> {
    const {
      data: { id },
    } = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      config,
    );
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,
      config,
    );
    return data;
  }
}
