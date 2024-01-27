import { Controller } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';
import { UserService } from './user.service';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
  constructor(private readonly userService: UserService) {}
}
