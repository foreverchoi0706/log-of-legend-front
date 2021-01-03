import { Test, TestingModule } from '@nestjs/testing';
import { LogOfLegendController } from './log-of-legend.controller';

describe('LogOfLegendController', () => {
  let controller: LogOfLegendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogOfLegendController],
    }).compile();

    controller = module.get<LogOfLegendController>(LogOfLegendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
