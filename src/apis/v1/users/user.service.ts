import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { RepositoryService } from '@modules';

@Injectable()
export class UserService {
  constructor(private _repo: RepositoryService) {}

  find() {
    return this._repo.user.find({});
  }

  findById(id: string) {
    return this._repo.user.findOne({
      where: { id },
      relations: {
        profile: true,
      },
    });
  }

  findWithProfile() {
    return this._repo.user.find({
      relations: {
        profile: true,
      },
    });
  }

  findByEmail(email: string) {
    return this._repo.user.exist({
      where: { email },
    });
  }

  create(data: CreateUserDto) {
    const profile = this._repo.userProfile.create({ avatar: data.avatar });
    return this._repo.user.save({ ...data, profile });
  }

  async findByIdAndUpdate(id: string, newData: Partial<UpdateUserDto>) {
    const oldData = await this.findById(id);
    if (!oldData) return null;

    if (newData.avatar) {
      oldData.profile.avatar = newData.avatar;
    }

    return this._repo.user.save({ ...oldData, ...newData });
  }
}
