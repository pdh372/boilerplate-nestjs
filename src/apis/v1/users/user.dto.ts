import { IsEmail, IsNotEmpty, MaxLength, IsEnum, IsStrongPassword } from 'class-validator';
import { GENDER } from '@constants';

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(50)
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MaxLength(50)
    @IsStrongPassword()
    password: string;

    @IsEnum(GENDER)
    gender: string;
}
