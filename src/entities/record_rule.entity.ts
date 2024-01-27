import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { GroupRecordRule } from './group_record_rule.entity';

@Entity()
export class RecordRule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  modelName: string;

  @Column({ type: 'text' })
  domainFilter: string;

  @Column()
  preventCreate: boolean;

  @Column()
  preventRead: boolean;

  @Column()
  preventUpdate: boolean;

  @Column()
  preventDelete: boolean;

  @ManyToMany(() => GroupRecordRule, groupRecordRule => groupRecordRule.recordRule)
  groupRecordRules: GroupRecordRule[];
}
