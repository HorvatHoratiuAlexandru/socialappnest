import { Test, TestingModule } from '@nestjs/testing';
import { SocialfilesController } from './socialfiles.controller';
import { SocialfilesService } from './socialfiles.service';

describe('SocialfilesController', () => {
  let controller: SocialfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialfilesController],
      providers: [SocialfilesService],
    }).compile();

    controller = module.get<SocialfilesController>(SocialfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
