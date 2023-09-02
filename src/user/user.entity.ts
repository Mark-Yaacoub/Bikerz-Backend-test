import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Index,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  OneToMany,
  Transaction,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { transactions } from 'src/transactions/transactions.entity';
import { Reviews } from 'src/review/review.entity';
import { TrainerInfo } from 'src/trainer_info/trainer_info.entity';

@Entity('users')
export class users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  user_id: number;

  @Column('varchar', { name: 'email', length: 50, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column('varchar', { name: 'image_url', length: 1000, nullable: true })
  imageUrl: string;

  @Column('int', { name: 'verified', default: 0 })
  verified: number;

  @Column('varchar', { name: 'salt', length: 500 })
  salt: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column('int', { name: 'user_type' })
  user_type: number;

  @Column('int', { name: 'status' })
  status: number;

  @Column('int', { name: 'otp' })
  otp: number;

  @Column()
  userRole: number;

  @BeforeInsert()
  insertDates() {
    this.createdDate = new Date();
  }
  @Column({
    name: 'created_date',
    nullable: true,
    default: null,
    type: 'timestamp',
  })
  createdDate: Date;

  @Column('int', { name: 'created_by', nullable: true })
  created_by: number;

  @BeforeUpdate()
  updateDates() {
    this.updatedDate = new Date();
  }
  @Column({
    name: 'updated_date',
    nullable: true,
    default: null,
    type: 'timestamp',
  })
  updatedDate: Date;

  @Column('int', { name: 'updated_by', nullable: true })
  updated_by: number;

  @OneToMany(() => transactions, (transaction) => transaction.user)
  userTransactions: transactions[];

  @OneToMany(() => Reviews, (review) => review.user)
  userReviews: Reviews[];

  @OneToOne(() => TrainerInfo, (trainerInfo) => trainerInfo.user)
  trainerInfo: TrainerInfo;

  async compareUserPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
