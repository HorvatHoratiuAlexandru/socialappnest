import { Test, TestingModule } from '@nestjs/testing';
import { SocialpostsService } from './socialposts.service';

describe('SocialpostsService', () => {
  let service: SocialpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialpostsService],
    }).compile();

    service = module.get<SocialpostsService>(SocialpostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
