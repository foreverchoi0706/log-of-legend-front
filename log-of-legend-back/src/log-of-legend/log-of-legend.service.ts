import { Injectable } from '@nestjs/common';
import axios from 'axios';

const API_KEY = 'RGAPI-4d0083e2-daec-49ba-8e63-b3eec2ed4be0';

@Injectable()
export class LogOfLegendService {
  async championRotations() {
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
}
