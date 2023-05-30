import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsNotEmpty } from "class-validator";
import * as bcrypt from 'bcrypt';

export class CreateSocialuserDto {

    @IsNotEmpty()
    username: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    password: string;
    @Type(() => Date)
    @IsDate()
    dob: Date;
}

/* 
@Column({ type: 'timestamptz' }) // Recommended
date_time_with_timezone: Date;
*/