import { blogs } from 'src/blogs/blogs.entity';
import { lesson } from 'src/lessons/lessons.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity('Category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_name_en: string;

  @Column()
  category_name_ar: string;

  @Column()
  description: string;

  @Column('int', { name: 'status', default: 1 })
  status: number;

  @OneToMany(() => blogs, (blog) => blog.category)
  blogs: blogs[];

  @OneToMany(() => lesson, (lesson) => lesson.category)
  lesson: blogs[];
}
