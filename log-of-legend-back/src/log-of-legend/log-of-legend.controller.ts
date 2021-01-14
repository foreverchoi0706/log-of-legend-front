import { Controller, Get, Param, Query } from '@nestjs/common';
import { LogOfLegendService } from './log-of-legend.service';
import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';

@Controller('log-of-legend')
export class LogOfLegendController {
  constructor(private readonly logOfLegnedService: LogOfLegendService) {}

  //챔피언로테이션
  @Get('champion-rotations')
  championRotations(): Promise<championRotationsDto[]> {
    return this.logOfLegnedService.championRotations();
  }

  //서버상태
  @Get('platform-data')
  platformData(): Promise<platformData> {
    return this.logOfLegnedService.platformData();
  }

  //소환사정보
  @Get('summoner-info')
  summonerInfo(
    @Query('summonerName') summonerName: string,
  ): Promise<summoner[]> {
    return this.logOfLegnedService.summonerInfo(encodeURI(summonerName));
  }
  //전적
  @Get('matchList')
  matchList(@Query('summonerName') summonerName: string): Promise<any> {
    return this.logOfLegnedService.matchList(encodeURI(summonerName));
  }
}
