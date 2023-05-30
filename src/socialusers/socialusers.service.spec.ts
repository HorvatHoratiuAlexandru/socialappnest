import { Test, TestingModule } from '@nestjs/testing';
import { SocialusersService } from './socialusers.service';

describe('SocialusersService', () => {
  let service: SocialusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialusersService],
    }).compile();

    service = module.get<SocialusersService>(SocialusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
