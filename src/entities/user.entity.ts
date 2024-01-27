import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserGroup } from './user_group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => UserGroup, userGroup => userGroup.user)
  userGroups: UserGroup[];
}
