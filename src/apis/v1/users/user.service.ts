import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { RepositoryService } from '@repositories';

@Injectable()
export class UserService {
    constructor(private repo: RepositoryService) {}

    findAll() {}

    findByEmail(email: string) {
        return email;
    }

    create(data: CreateUserDto) {
        return data;
    }
}
