import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller({ path: 'user' })
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService,
    ) {}

    @Post()
    createUser(): string {
        return this.userService.create();
    }

    @Get()
    listUser() {
        return this.userService.find();
    }

    @Get('/:id')
    retrieveUser(@Param('id', ParseIntPipe) user_id: number) {
        return this.userService.findById(user_id);
    }
}
