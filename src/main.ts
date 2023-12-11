import { ENV_VAR } from './configs/env.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableVersioning({
        type: VersioningType.URI,
    });
    await app.listen(3000);

    const configService = app.get(ConfigService);
    const postgresqlUrl = configService.get<string>(ENV_VAR.POSTGRESQL_URL);
    console.log(postgresqlUrl);
}
bootstrap();
