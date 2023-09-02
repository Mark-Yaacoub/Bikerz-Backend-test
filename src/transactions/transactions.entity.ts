import { users } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  Index,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity('transactions')

export class transactions extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column('int', { name: 'status' })
  status: number;

  @Column({ name: 'tap_charge_id', nullable: true })
  tapChargeId: string;

  @Column({ name: 'tap_initiate_id', nullable: true })
  tapInitiateId: string;

  @Column({ name: 'tap_capture_id', nullable: true })
  tapCaptureId: string;

  @Column({ name: 'tap_redirect_url', nullable: true })
  tapRedirectUrl: string;

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

  @ManyToOne(() => users, (users) => users.userTransactions)
  @JoinColumn({ name: 'user_id' })
  user: users;
}
