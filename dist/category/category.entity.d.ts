import { blogs } from 'src/blogs/blogs.entity';
import { BaseEntity } from 'typeorm';
export declare class Category extends BaseEntity {
    category_id: number;
    category_name_en: string;
    category_name_ar: string;
    description: string;
    status: number;
    blogs: blogs[];
    lesson: blogs[];
}
