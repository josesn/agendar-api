import { Test, TestingModule } from '@nestjs/testing';
import { SchedulingsService } from './schedulings.service';

describe('SchedulingsService', () => {
  let service: SchedulingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulingsService],
    }).compile();

    service = module.get<SchedulingsService>(SchedulingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
