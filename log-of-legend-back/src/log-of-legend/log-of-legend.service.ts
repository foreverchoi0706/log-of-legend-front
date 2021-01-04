import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';

const API_KEY = 'RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0';

@Injectable()
export class LogOfLegendService {
  async championRotations(): Promise<championRotationsDto[]> {
    const {
      data: { freeChampionIds },
    } = await axios.get(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
      {
        headers: {
          'X-Riot-Token': API_KEY,
        },
      },
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
      {
        headers: {
          'X-Riot-Token': API_KEY,
        },
      },
    );
    return data;
  }

  async summoner(): Promise<summoner[]> {
    const {
      data: { id },
    } = await axios.get(
      'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EC%8A%A4%ED%8B%B8%EC%B5%9C',
      {
        headers: {
          'X-Riot-Token': API_KEY,
        },
      },
    );
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,
      {
        headers: {
          'X-Riot-Token': API_KEY,
        },
      },
    );
    return data;
  }
}
