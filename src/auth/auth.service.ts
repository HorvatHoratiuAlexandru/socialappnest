import { Injectable } from '@nestjs/common';
import { SocialusersService } from 'src/socialusers/socialusers.service';

import { matchPasswords } from 'src/utils/crypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: SocialusersService
    ){}

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOneByUsername(username);

        if (user && matchPasswords(password, user.password)){
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}
