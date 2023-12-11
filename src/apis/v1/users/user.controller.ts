import { Controller, Get } from '@nestjs/common';
import { ROUTES, VERSIONS } from '@constants';

@Controller({ path: ROUTES.USERS, version: VERSIONS.V1 })
export class UserController {
    @Get('')
    list(): [] {
        return [];
    }
}
