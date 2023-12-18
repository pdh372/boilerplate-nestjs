import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:user_id')
    retrieve(@Param('user_id') user_id: string) {
        return this.userService.findOne(user_id);
    }

    @Get('/')
    list() {
        return this.userService.findAll();
    }

    @Post('/')
    async create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }
}
