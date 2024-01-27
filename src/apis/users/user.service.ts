import { Injectable } from '@nestjs/common';
import { RepositoryService } from '@modules';

@Injectable()
export class UserService {
  constructor(private _repo: RepositoryService) {}
}
