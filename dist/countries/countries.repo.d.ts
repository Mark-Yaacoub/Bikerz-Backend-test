import { Repository } from 'typeorm';
import { Countries } from './countries.entity';
export declare class CountriesRepo extends Repository<CountriesRepo> {
    getAllActiveCountries(): Promise<Countries[]>;
}
