import { Test, TestingModule } from '@nestjs/testing';
import { FrasesService } from './frases.service';

describe('FrasesService', () => {
  let service: FrasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrasesService],
    }).compile();

    service = module.get<FrasesService>(FrasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
