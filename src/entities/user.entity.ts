import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GENDER } from '@constants';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    password: string;

    @Column({ enum: GENDER, default: GENDER.OTHER })
    gender: string;
}
