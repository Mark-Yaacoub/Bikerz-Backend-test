import { Countries } from 'src/countries/countries.entity';
import { BaseEntity } from 'typeorm';
export declare class City extends BaseEntity {
    city_id: number;
    city_name_en: string;
    city_name_ar: string;
    status: number;
    country_id: number;
    countries: Countries;
}
