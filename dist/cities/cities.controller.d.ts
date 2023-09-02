import { CitiesService } from './cities.service';
import { City } from './cities.entity';
export declare class CitiesController {
    private CitiesService;
    constructor(CitiesService: CitiesService);
    getAllCitiesByCountry_id(country_id: number): Promise<City[]>;
    getAll(req: any): Promise<City[]>;
}
