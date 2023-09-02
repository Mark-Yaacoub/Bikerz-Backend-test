import { Repository } from "typeorm";
import { City } from "./cities.entity";
export declare class CityRepo extends Repository<CityRepo> {
    getAllCities(): Promise<any>;
    getAllCitiesByCountry_id(country_id: number): Promise<any>;
    getAll(): Promise<City[]>;
    getStatus(status: number): Promise<City[]>;
    getAllByStatus(): Promise<City[]>;
    changeStatus(id: number, status: number): Promise<any>;
}
