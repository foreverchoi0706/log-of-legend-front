import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogOfLegendModule } from './log-of-legend/log-of-legend.module';

@Module({
  imports: [LogOfLegendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
