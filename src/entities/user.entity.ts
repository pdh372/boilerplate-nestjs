import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { GENDER } from '@constants';
import { UserProfileEntity } from './userProfile.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 50 })
  password: string;

  @Column({ enum: GENDER, default: GENDER.OTHER })
  gender: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserProfileEntity, userProfile => userProfile.avatar, {
    cascade: true,
  })
  @JoinColumn()
  profile: UserProfileEntity;
}
