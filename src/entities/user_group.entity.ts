import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class UserGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userGroups)
  user: User;

  @ManyToOne(() => Group, group => group.userGroups)
  group: Group;
}
