import { BaseEntity } from 'typeorm';
export declare class rules extends BaseEntity {
    rule_id: number;
    rule_en: string;
    rule_ar: string;
    status: number;
    type: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
}
