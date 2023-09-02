import { City } from 'src/cities/cities.entity';
import { BaseEntity } from 'typeorm';
export declare class Countries extends BaseEntity {
    country_id: number;
    country_name_en: string;
    country_name_ar: string;
    status: number;
    cities: City[];
}
