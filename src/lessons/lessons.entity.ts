import { Category } from "src/category/category.entity";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('lesson')
export class lesson extends BaseEntity {
         
    @PrimaryGeneratedColumn({ type: "int", name: "lesson_id" })
    lesson_id: number;

    @Column("varchar", { name: "title_name_en", length: 250 })
    title_name_en: string;

    @Column("varchar", { name: "title_name_ar", length: 250 })
    title_name_ar: string;

    @Column("varchar", { name: "link", length: 250 })
    link: string;

    @Column("varchar", { name: "content", length: 250 })
    content: string;

    @Column("int", { name: "status" })
    status: number;

    @Column("int", { name: "price" })
    price: number;

     
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

  @Column({ name: 'category_id' })
  category_id: number;

  @ManyToOne(() => Category, (category) => category.blogs)
  @JoinColumn({ name: 'category_id' })
  category: Category;

}