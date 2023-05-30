import { Test, TestingModule } from '@nestjs/testing';
import { SocialpostsController } from './socialposts.controller';
import { SocialpostsService } from './socialposts.service';

describe('SocialpostsController', () => {
  let controller: SocialpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialpostsController],
      providers: [SocialpostsService],
    }).compile();

    controller = module.get<SocialpostsController>(SocialpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
