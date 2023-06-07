import * as bcrypt from 'bcrypt';

export function EncodePassword(rawPassword: string): string{
    const rounds = 10;
    return bcrypt.hashSync(rawPassword, rounds);
}

export function matchPasswords(rawPassword: string, hashedPassword): boolean{
    const rounds = 10;
    return bcrypt.compareSync(rawPassword, hashedPassword);
}