import { LookupMaster } from 'src/lookupmaster/lookupmaster.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  AfterInsert,
} from 'typeorm';

// @Index("fkIdx_46", ["lookupId"], {})
@Index(['lookupId', 'lookupDetailEnName'], { unique: true })
@Index(['lookupId', 'lookupDetailArName'], { unique: true })
@Index(['lookupId', 'lookupDetailEnName', 'status'], { unique: true })
@Index(['lookupId', 'lookupDetailArName', 'status'], { unique: true })
@Entity('lookup_details')
export class LookupDetails extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'lookup_detail_id' })
  lookupDetailId: number;
     rules: any;

  @AfterInsert()
  insertCode() {
    this.lookupDetailCode = this.lookupDetailId;
    this.save();
  }

  @Column('int', { name: 'lookup_detail_code', nullable: true })
  lookupDetailCode: number | null;

  @Column('varchar', { name: 'lookup_detail_ar_name', length: 250 })
  lookupDetailArName: string;

  @Column('varchar', { name: 'lookup_detail_en_name', length: 250 })
  lookupDetailEnName: string;

  @Column('varchar', { name: 'icon', length: 250, nullable: true })
  icon: string;

  @Column('varchar', { name: 'color', length: 250, nullable: true })
  color: string;

  @Column('int', { name: 'status' })
  status: number;

  @Column('int', { name: 'lookup_id' })
  lookupId: number;

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

  @ManyToOne(() => LookupMaster, (LookupMaster) => LookupMaster.lookupdetail2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'lookup_id', referencedColumnName: 'lookupId' }])
  lookupdetail2: LookupMaster;
}
