import { Module } from '@nestjs/common';
import { SocialpostsService } from './socialposts.service';
import { SocialpostsController } from './socialposts.controller';

@Module({
  controllers: [SocialpostsController],
  providers: [SocialpostsService]
})
export class SocialpostsModule {}
