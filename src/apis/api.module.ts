import { Module } from '@nestjs/common';
import { UserModule } from './v1/users/user.module';

@Module({
    imports: [UserModule],
})
export class ApiModule {}
