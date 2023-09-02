import { BaseEntity } from 'typeorm';
export declare class Faq extends BaseEntity {
    question_id: number;
    question_ar: string;
    question_en: string;
    answer_ar: string;
    answer_en: string;
    useful: number;
    not_useful: number;
    status: number;
    insertDates(): void;
    created_date: Date;
    created_by: number;
    updateDates(): void;
    updated_date: Date;
    updated_by: number;
}
