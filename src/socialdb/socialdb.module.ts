import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Socialuser } from 'src/socialusers/entities/socialuser.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3309,
            username: 'socialdb',
            password: 'password',
            database: 'socialapp',
            entities: [Socialuser, Profile],
            synchronize: true,
    }),],
    controllers: [],
    providers: [],
})
export class SocialdbModule {}
