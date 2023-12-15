import { Injectable } from '@nestjs/common';
import { PrismaService } from '@cores/services';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private readonly _prisma: PrismaService) {}

    findAll() {
        return this._prisma.user.findMany({ where: {} });
    }

    create(data: CreateUserDto) {
        return this._prisma.user.create({
            data,
        });
    }
}
