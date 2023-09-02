import { BaseEntity } from 'typeorm';
export declare class Screen extends BaseEntity {
    screen_id: number;
    screen_ar_name: string;
    screen_en_name: string;
    status: number;
    screen_category: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
}
