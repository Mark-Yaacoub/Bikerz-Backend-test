import { BaseEntity } from "typeorm";
export declare class currency extends BaseEntity {
    currency_id: number;
    currency_name_en: string;
    currency_name_ar: string;
    status: number;
    entity_name_en: string;
    entity_name_ar: string;
}
