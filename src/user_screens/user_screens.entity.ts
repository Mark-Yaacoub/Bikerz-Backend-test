import { Screen } from 'src/screens/screen.entity';
import { users } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BeforeUpdate,
  BeforeInsert,
  BaseEntity,
} from 'typeorm';

@Entity('user_screens')
export class userScreens extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'userScreens_id' })
  userScreens_id: number;

  @Column('int', { name: 'status' })
  status: number;

  @ManyToOne(() => users)
  @JoinColumn({ name: 'user_id' })
  users: users;

  @Column('int', { name: 'user_id', nullable: true })
  user_id: number;

  @ManyToOne(() => Screen)
  @JoinColumn({ name: 'screen_id' })
  screen: Screen;

  @Column('int', { name: 'screen_id', nullable: true })
  screen_id: number;

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

  @Column('int', { name: 'created_by' })
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
