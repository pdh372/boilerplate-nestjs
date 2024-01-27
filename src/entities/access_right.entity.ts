import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Group } from './group.entity';

@Entity()
export class AccessRight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, group => group.accessRights)
  group: Group;

  @Column()
  modelName: string;

  @Column()
  permCreate: boolean;

  @Column()
  permRead: boolean;

  @Column()
  permUpdate: boolean;

  @Column()
  permDelete: boolean;
}
