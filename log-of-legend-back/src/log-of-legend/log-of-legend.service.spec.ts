import { Test, TestingModule } from '@nestjs/testing';
import { LogOfLegendService } from './log-of-legend.service';


describe('LogOfLegendService', () => {
  let service: LogOfLegendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogOfLegendService],
    }).compile();

    service = module.get<LogOfLegendService>(LogOfLegendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
