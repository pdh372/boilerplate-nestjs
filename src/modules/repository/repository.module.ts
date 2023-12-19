import { Global, Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity, UserProfileEntity } from '@entities';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

export class RepositoryService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

        @InjectRepository(UserProfileEntity)
        private userProfileRepository: Repository<UserProfileEntity>,
    ) {}

    get user() {
        return this.userRepository;
    }

    get userProfile() {
        return this.userProfileRepository;
    }
}

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, UserProfileEntity])],
    providers: [RepositoryService],
    exports: [RepositoryService],
})
export class RepositoryModule {}
