import { Body, ConflictException, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  list() {
    return this.userService.findWithProfile();
  }

  @Patch('/:user_id')
  put(@Param('user_id') user_id: string, @Body() body: UpdateUserDto) {
    return this.userService.findByIdAndUpdate(user_id, body);
  }

  @Get('/:user_id')
  retrieve(@Param('user_id') user_id: string) {
    return this.userService.findById(user_id);
  }

  @Post('/')
  async create(@Body() body: CreateUserDto) {
    const isUserExists = await this.userService.findByEmail(body.email);
    if (isUserExists) throw new ConflictException();

    return this.userService.create(body);
  }
}
