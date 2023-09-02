import { rules } from 'src/rules/rules.entity';
import { Screen } from 'src/screens/screen.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeUpdate, BeforeInsert, BaseEntity } from 'typeorm';

@Entity('screen_rules')
export class ScreenRules extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'screen_rule_id' })
  screen_rule_id: number;

  @Column('int', { name: 'status' })
  status: number;

  // @Column('int', { name: 'screen_id' })
  // screen_id: number;

  // @Column('int', { name: 'rules_id' })
  // rules_id: number;

  @ManyToOne(() => rules)
  @JoinColumn({ name: 'rule_id' })
  Rules: rules;

  @Column('int', { name: 'rule_id', nullable: true })
  rule_id: number;

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
