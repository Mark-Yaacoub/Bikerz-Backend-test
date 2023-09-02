import { LookupDetails } from 'src/LookupDetails/LookupDetails.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';

@Entity('rules')
export class rules extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'rule_id' })
  rule_id: number;

  @Column('varchar', { name: 'rule_en', length: 250 })
  rule_en: string;

  @Column('varchar', { name: 'rule_ar', length: 250 })
  rule_ar: string;

  @Column('int', { name: 'status' })
  status: number;

  @Column('int', { name: 'type', nullable: true })
  type: number;


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

  // @ManyToOne(() => LookupDetails, (lookupDetails) => lookupDetails.rules, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // @JoinColumn([{ name: 'status', referencedColumnName: 'lookupDetailId' }])
  // status2: LookupDetails;

}
