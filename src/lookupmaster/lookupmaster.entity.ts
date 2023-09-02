import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, BeforeInsert, BeforeUpdate, AfterInsert, OneToMany, Index } from "typeorm";
import { LookupStatus } from './enums/lookup-status-enum';
import { LookupType } from './enums/lookup-type-enum';
import { LookupDetails } from "src/LookupDetails/LookupDetails.entity";


@Index(["status"], { unique: false })
@Index(["lookupCode"], { unique: false })
@Index(["status", "lookupCode"], { unique: false })

@Entity("lookup_master",)
export class LookupMaster extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "lookup_id" })
  lookupId: number;

  @AfterInsert()
  insertCode() {
    this.lookupCode = this.lookupId;
    this.save();
  }

  @Column("int", { name: "lookup_code", nullable: true })
  lookupCode: number;

  @Column("varchar", { name: "lookup_ar_name", length: 250 })
  lookupArName: string;

  @Column("varchar", { name: "lookup_en_name", nullable: true, length: 250 })
  lookupEnName: string | null;

  @Column("int", { name: "lookup_type" })
  lookupType: LookupType;

  @Column("int", { name: "status" })
  status: LookupStatus;

  @BeforeInsert()
  insertDates() {
    this.createdDate = new Date();
  }
  @Column({ name: "created_date", nullable: true, default: null, type: "timestamp" })
  createdDate: Date;

  @Column("int", { name: "created_by" })
  created_by: number;

  @BeforeUpdate()
  updateDates() {
    this.updatedDate = new Date();
  }
  @Column({ name: "updated_date", nullable: true, default: null, type: "timestamp" })
  updatedDate: Date;

  @Column("int", { name: "updated_by", nullable: true })
  updated_by: number;

  @OneToMany(() => LookupDetails, (LookupDetails) => LookupDetails.lookupdetail2)
  lookupdetail2: LookupDetails[];

}