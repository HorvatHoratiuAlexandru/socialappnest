import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialdbModule } from './socialdb/socialdb.module';
import { SocialusersModule } from './socialusers/socialusers.module';
import { SocialpostsModule } from './socialposts/socialposts.module';
import { SocialfilesModule } from './socialfiles/socialfiles.module';
import { TagsModule } from './tags/tags.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SocialdbModule, SocialusersModule, SocialpostsModule, SocialfilesModule, TagsModule, ProfilesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
