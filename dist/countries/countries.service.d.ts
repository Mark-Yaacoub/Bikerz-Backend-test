import { CountriesRepo } from './countries.repo';
import { Countries } from './countries.entity';
export declare class CountriesService {
    private CountriesRepo;
    constructor(CountriesRepo: CountriesRepo);
    getAllActiveCountries(): Promise<Countries[]>;
}
