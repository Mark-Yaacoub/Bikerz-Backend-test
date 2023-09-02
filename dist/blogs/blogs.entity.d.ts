import { Category } from 'src/category/category.entity';
import { BaseEntity } from 'typeorm';
export declare class blogs extends BaseEntity {
    id: number;
    enTitle: string;
    arTitle: string;
    image: string;
    enContent: string;
    arContent: string;
    seoTitle: string;
    seoContent: string;
    slug: string;
    tags: string[];
    category_id: number;
    category: Category;
    viewsCount: number;
}
