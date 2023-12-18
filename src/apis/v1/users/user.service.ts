import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { RepositoryService } from '@utils';

@Injectable()
export class UserService {
    constructor(private _repo: RepositoryService) {}

    findAll() {
        return this._repo.user.find({});
    }

    findOne(user_id: string) {
        return this._repo.user.findOne({ where: { id: user_id } });
    }

    findByEmail(email: string) {
        return email;
    }

    create(data: CreateUserDto) {
        return this._repo.user.save({ ...data });
    }
}
