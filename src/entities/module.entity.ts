import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Model } from './model.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => Model, model => model.module)
  models: Model[];
}
