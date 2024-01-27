import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AccessRight } from './access_right.entity';
import { GroupRecordRule } from './group_record_rule.entity';
import { UserGroup } from './user_group.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UserGroup, userGroup => userGroup.group)
  userGroups: UserGroup[];

  @OneToMany(() => AccessRight, accessRight => accessRight.group)
  accessRights: AccessRight[];

  @OneToMany(() => GroupRecordRule, groupRecordRule => groupRecordRule.group)
  groupRecordRules: GroupRecordRule[];
}
