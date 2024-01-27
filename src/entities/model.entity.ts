import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Module } from './module.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Module, module => module.models)
  module: Module;

  @Column()
  name: string;
}
