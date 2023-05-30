import { Test, TestingModule } from '@nestjs/testing';
import { SocialfilesService } from './socialfiles.service';

describe('SocialfilesService', () => {
  let service: SocialfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialfilesService],
    }).compile();

    service = module.get<SocialfilesService>(SocialfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
