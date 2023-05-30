import * as bcrypt from 'bcrypt';

export function EncodePassword(rawPassword: string){
    const rounds = 10;
    return bcrypt.hashSync(rawPassword, rounds);
}