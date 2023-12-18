import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@configs';
import { ApiModule } from './apis/v1/api.module';
import { postgresProviders } from './cores/modules/postgres/postgres.provider';
import { RepositoryModule } from './repositories';

@Module({
    imports: [
        RepositoryModule,
        ApiModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.NODE_ENV,
            load: [envConfig],
        }),
    ],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
        ...postgresProviders,
    ],
})
export class AppModule {}
