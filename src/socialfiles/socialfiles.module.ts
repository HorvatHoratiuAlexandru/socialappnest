import { Module } from '@nestjs/common';
import { SocialfilesService } from './socialfiles.service';
import { SocialfilesController } from './socialfiles.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, PassportModule],
  controllers: [SocialfilesController],
  providers: [SocialfilesService]
})
export class SocialfilesModule {}
