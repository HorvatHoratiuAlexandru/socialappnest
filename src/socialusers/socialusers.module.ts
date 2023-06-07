import { Module } from '@nestjs/common';
import { SocialusersService } from './socialusers.service';
import { SocialusersController } from './socialusers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socialuser } from './entities/socialuser.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Socialuser, Profile])],
  controllers: [SocialusersController],
  providers: [SocialusersService],
  exports: [SocialusersService]
})
export class SocialusersModule {}
