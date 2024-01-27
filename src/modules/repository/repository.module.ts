import { Global, Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@entities';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

export class RepositoryService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get user() {
    return this.userRepository;
  }
}

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
