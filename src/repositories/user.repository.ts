import { DataSource } from 'typeorm';
import { UserEntity } from '@entities';
import { INJECT_KEY } from '@constants';

export const userProviders = [
    {
        provide: INJECT_KEY.REPOSITORY.USER,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: [INJECT_KEY.DATA_SOURCE],
    },
];
