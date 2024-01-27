import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { envConfig, typeOrmConfig } from '@configs';
import { ApiModule } from './apis/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryModule } from './modules/repository/repository.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
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
  ],
})
export class AppModule {}
