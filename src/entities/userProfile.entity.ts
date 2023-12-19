import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserProfileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    avatar: string;
}
