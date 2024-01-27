import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Group } from './group.entity';
import { RecordRule } from './record_rule.entity';

@Entity()
export class GroupRecordRule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, group => group.groupRecordRules)
  group: Group;

  @ManyToOne(() => RecordRule, recordRule => recordRule.groupRecordRules)
  recordRule: RecordRule;
}
