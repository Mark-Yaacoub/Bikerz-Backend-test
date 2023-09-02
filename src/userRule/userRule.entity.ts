import { rules } from 'src/rules/rules.entity';
import { users } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('userRules')
export class userRules extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'userRules_id' })
  userRules_id: number;

  @Column('int', { name: 'status' })
  status: number;

  @ManyToOne(() => rules)
  @JoinColumn({ name: 'rule_id' })
  Rules: rules;

  @Column('int', { name: 'rule_id', nullable: true })
  rule_id: number;

  @ManyToOne(() => users)
  @JoinColumn({ name: 'user_id' })
  users: users;

  @Column('int', { name: 'user_id', nullable: true })
  user_id: number;

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

  @Column('int', { name: 'created_by', default: null, nullable: true })
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
}
