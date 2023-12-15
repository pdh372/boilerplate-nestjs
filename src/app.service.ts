import { Injectable } from '@nestjs/common';
import { prisma } from '@utils';

@Injectable()
export class AppService {
    createUser(): any {
        return prisma.user.create({
            data: {
                email: 'huy',
                password: '123',
            },
        });
    }
}
