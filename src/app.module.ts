import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@configs';
import { ApiModule } from './apis/api.module';
import { PrismaModule } from '@cores/modules';

@Module({
    imports: [
        PrismaModule,
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
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: NormalizeResponse,
        // },
    ],
})
export class AppModule {}
