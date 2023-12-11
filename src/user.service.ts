import { Injectable } from '@nestjs/common';
import { prisma } from './utils';

@Injectable()
export class UserService {
    create(): any {
        return prisma.user.create({
            data: {
                email: '2',
                password: '123',
            },
        });
    }

    async find() {
        return prisma.user.findMany({
            where: {},
        });
    }

    async findById(id: number) {
        return prisma.user.findFirst({ where: { id } });
    }
}
