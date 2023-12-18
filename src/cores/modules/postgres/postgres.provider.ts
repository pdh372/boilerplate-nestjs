import { DataSource } from 'typeorm';
import { INJECT_KEY } from '@constants';

export const postgresProviders = [
    {
        provide: INJECT_KEY.DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'pg@123456',
                database: 'test-dev',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
