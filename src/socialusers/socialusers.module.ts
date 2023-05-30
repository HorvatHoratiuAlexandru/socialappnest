import { Module } from '@nestjs/common';
import { SocialusersService } from './socialusers.service';
import { SocialusersController } from './socialusers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socialuser } from './entities/socialuser.entity';
import { Profile } from 'src/profiles/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Socialuser, Profile])],
  controllers: [SocialusersController],
  providers: [SocialusersService],
  exports: []
})
export class SocialusersModule {}
