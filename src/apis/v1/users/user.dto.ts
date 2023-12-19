import { IsEmail, IsNotEmpty, MaxLength, IsEnum, IsStrongPassword, IsString } from 'class-validator';
import { GENDER } from '@constants';
import { PartialType } from '@nestjs/swagger';

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
    gender: string = GENDER.OTHER;

    @IsString()
    avatar: string = '';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
