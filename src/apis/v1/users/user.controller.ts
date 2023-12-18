import { Body, Controller, Get, Post } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/')
    list() {
        return this.userService.findAll();
    }

    @Post('/')
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create({ ...body });
    }
}
