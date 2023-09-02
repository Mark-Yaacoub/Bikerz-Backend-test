import {
     Entity,
     PrimaryGeneratedColumn,
     Column,
     BeforeUpdate,
     BeforeInsert,
     OneToOne,
     JoinColumn,
     OneToMany,
     ManyToOne,
     BaseEntity,
   } from 'typeorm';
   
   @Entity('screen')
   export class Screen extends BaseEntity {
     @PrimaryGeneratedColumn({ type: 'int', name: 'screen_id' })
     screen_id: number;
   
     @Column('varchar', { name: 'screen_ar_name', length: 250 })
     screen_ar_name: string;
   
     @Column('varchar', { name: 'screen_en_name', length: 250 })
     screen_en_name: string;
   
     @Column('int', { name: 'status' })
     status: number;
   
     @Column('int', { name: 'screen_category' })
     screen_category: number;
   
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

   }
   