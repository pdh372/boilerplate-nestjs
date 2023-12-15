import { Body, Controller, Get, Post } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { hashPassword } from '@helpers';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/')
    list() {
        return this.userService.findAll();
    }

    @Post('/')
    async create(@Body() body: CreateUserDto) {
        console.log(typeof body.password, body.password);
        const password = await hashPassword(body.password);
        return await this.userService.create({ ...body, password });
    }
}
