import { CountriesService } from './countries.service';
import { Countries } from './countries.entity';
export declare class CountriesController {
    private CountriesService;
    constructor(CountriesService: CountriesService);
    getAllActiveCountries(): Promise<Countries[]>;
}
