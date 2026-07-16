import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  STAFF = 'staff',
}

@Entity('users')
export class User {
  @Column({ nullable: false, unique: true })
  account!: string;

  @CreateDateColumn()
  created_at!: Date;

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ default: UserRole.STAFF, length: 20, type: 'varchar' })
  role!: UserRole;

  @Column({ nullable: false })
  username!: string;
}
