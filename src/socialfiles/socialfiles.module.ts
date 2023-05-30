import { Module } from '@nestjs/common';
import { SocialfilesService } from './socialfiles.service';
import { SocialfilesController } from './socialfiles.controller';

@Module({
  controllers: [SocialfilesController],
  providers: [SocialfilesService]
})
export class SocialfilesModule {}
