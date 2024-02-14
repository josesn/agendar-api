import { Test, TestingModule } from '@nestjs/testing';
import { SchedulingsController } from './schedulings.controller';
import { SchedulingsService } from './schedulings.service';

describe('SchedulingsController', () => {
  let controller: SchedulingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedulingsController],
      providers: [SchedulingsService],
    }).compile();

    controller = module.get<SchedulingsController>(SchedulingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
