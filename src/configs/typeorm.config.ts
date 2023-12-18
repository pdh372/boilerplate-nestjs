import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'postgres-service',
    port: 5432,
    username: 'postgres',
    password: 'pg@123456',
    database: 'agile-sim-dev',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
