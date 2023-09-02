
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesRepo } from './countries.repo';
import { Countries } from './countries.entity';

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(CountriesRepo) private CountriesRepo: CountriesRepo,
      ) {}

      async getAllActiveCountries(): Promise<Countries[]> {
        return await this.CountriesRepo.getAllActiveCountries();
      }

}
