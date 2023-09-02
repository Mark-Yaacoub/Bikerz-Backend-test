import { Category } from 'src/category/category.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blogs')
export class blogs extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title_en' })
  enTitle: string;

  @Column({ name: 'title_ar' })
  arTitle: string;

  @Column()
  image: string;

  @Column({ name: 'content_en', type: 'json' })
  enContent: string;

  @Column({ name: 'content_ar', type: 'json' })
  arContent: string;

  @Column({ name: 'seo_title' })
  seoTitle: string;

  @Column({ name: 'seo_content' })
  seoContent: string;

  @Column()
  slug: string;

  @Column('text', { array: true, default: '{}' })
  tags: string[];

  @Column({ name: 'category_id' })
  category_id: number;

  @ManyToOne(() => Category, (category) => category.blogs)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ name: 'views_count', default: 0 })
  viewsCount: number;
}
