import { Test, TestingModule } from '@nestjs/testing';
import { SocialusersController } from './socialusers.controller';
import { SocialusersService } from './socialusers.service';

describe('SocialusersController', () => {
  let controller: SocialusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialusersController],
      providers: [SocialusersService],
    }).compile();

    controller = module.get<SocialusersController>(SocialusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
