import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeUpdate, BeforeInsert, BaseEntity, OneToMany } from 'typeorm';


@Entity('faq')
export class Faq extends BaseEntity{
     @PrimaryGeneratedColumn({ type: "int", name: "question_id" })
     question_id: number;
    
     @Column("varchar", { name: "question_ar", length: 250 , nullable: true })
     question_ar: string;
 
     @Column("varchar", { name: "question_en", length: 250 , nullable: true })
     question_en: string;
 
     @Column("varchar", { name: "answer_ar", length: 5000 , nullable: true })
     answer_ar: string;
 
     @Column("varchar", { name: "answer_en", length: 5000 , nullable: true })
     answer_en: string;
 
     @Column({ type: "int", default: 1 })
     useful: number;
 
     @Column({ type: "int", default: 1 })
     not_useful: number;
 
     @Column({ type: "int", default: 1 })
     status: number;
 
     @BeforeInsert()
     insertDates() {
         this.created_date = new Date();
     }
     @Column({ name: "created_date", type: "timestamp" })
     created_date: Date;
 
     @Column("int", { name: "created_by", nullable: true })
     created_by: number;
 
     @BeforeUpdate()
     updateDates() {
         this.updated_date = new Date();
     }
     @Column({ name: "updated_date", nullable: true, default: null, type: "timestamp" })
     updated_date: Date;
 
     @Column("int", { name: "updated_by", nullable: true })
     updated_by: number;
}
