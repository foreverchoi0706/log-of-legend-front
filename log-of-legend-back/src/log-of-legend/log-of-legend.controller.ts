import { Controller, Get } from '@nestjs/common';
import { LogOfLegendService } from './log-of-legend.service';
import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';

@Controller('log-of-legend')
export class LogOfLegendController {
  constructor(private readonly logOfLegnedService: LogOfLegendService) {}

  @Get('champion-rotations')
  championRotations(): Promise<championRotationsDto[]> {
    return this.logOfLegnedService.championRotations();
  }

  @Get('platform-data')
  platformData(): Promise<platformData> {
    return this.logOfLegnedService.platformData();
  }

  @Get("id")
  summoner() : Promise<summoner[]>{
    return this.logOfLegnedService.summoner();
  }
}
