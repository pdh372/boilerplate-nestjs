import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@configs';
import { ApiModule } from './apis/api.module';
import { NormalizeResponse } from '@cores/interceptors';

@Module({
    imports: [
        ApiModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.NODE_ENV,
            load: [envConfig],
        }),
    ],
    controllers: [],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: NormalizeResponse,
        },
    ],
})
export class AppModule {}
