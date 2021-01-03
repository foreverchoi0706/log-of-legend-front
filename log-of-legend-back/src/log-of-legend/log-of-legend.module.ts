import { Module } from '@nestjs/common';
import { LogOfLegendService } from './log-of-legend.service';
import { LogOfLegendController } from './log-of-legend.controller';

@Module({
  providers: [LogOfLegendService],
  controllers: [LogOfLegendController]
})
export class LogOfLegendModule {}
