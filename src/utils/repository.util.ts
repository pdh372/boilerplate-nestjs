import { Global, Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '@entities';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

export class RepositoryService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    get user() {
        return this.userRepository;
    }
}

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [RepositoryService],
    exports: [RepositoryService],
})
export class RepositoryModule {}
