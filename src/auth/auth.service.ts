import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SocialusersService } from 'src/socialusers/socialusers.service';

import { matchPasswords } from 'src/utils/crypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: SocialusersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOneByUsername(username);

        if (user && matchPasswords(password, user.password)){
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
