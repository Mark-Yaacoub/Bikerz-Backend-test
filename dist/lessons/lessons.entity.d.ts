import { Category } from "src/category/category.entity";
import { BaseEntity } from "typeorm";
export declare class lesson extends BaseEntity {
    lesson_id: number;
    title_name_en: string;
    title_name_ar: string;
    link: string;
    content: string;
    status: number;
    price: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
    category_id: number;
    category: Category;
}
