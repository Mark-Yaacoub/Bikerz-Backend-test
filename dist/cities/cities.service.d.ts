import { CityRepo } from './cites.repo';
import { City } from './cities.entity';
export declare class CitiesService {
    private CityRepo;
    constructor(CityRepo: CityRepo);
    getAllCities(req: any): Promise<City[]>;
    getAllCitiesByCountry_id(country_id: any): Promise<City[]>;
}
