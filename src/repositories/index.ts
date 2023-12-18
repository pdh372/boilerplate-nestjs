import { Global, Inject, Module } from '@nestjs/common';
import { PostgresModule } from '@cores/modules/postgres/postgres.module';
import { Repository } from 'typeorm';
import { UserEntity } from '@entities';
import { INJECT_KEY } from '@constants';
import { userProviders } from './user.repository';

export class RepositoryService {
    constructor(
        @Inject(INJECT_KEY.REPOSITORY.USER)
        private userRepository: Repository<UserEntity>,
    ) {}

    get User() {
        return this.userRepository;
    }
}

@Global()
@Module({
    imports: [PostgresModule],
    providers: [RepositoryService, ...userProviders],
    exports: [RepositoryService],
})
export class RepositoryModule {}
