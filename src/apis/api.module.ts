import { Module } from '@nestjs/common';
import { UserModuleV1 } from './v1/users/user.module';

@Module({
    imports: [UserModuleV1],
})
export class ApiModule {}
