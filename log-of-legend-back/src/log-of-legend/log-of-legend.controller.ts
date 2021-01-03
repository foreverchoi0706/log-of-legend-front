import { Controller, Get } from '@nestjs/common';
import { LogOfLegendService } from './log-of-legend.service';

@Controller('log-of-legend')
export class LogOfLegendController {
  constructor(private readonly logOfLegnedService: LogOfLegendService) {}

  @Get('champion-rotations')
  championRotations(): Promise<string[]> {
    return this.logOfLegnedService.championRotations();
  }
}
