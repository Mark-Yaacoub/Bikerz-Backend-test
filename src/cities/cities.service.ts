/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityRepo } from './cites.repo';
import { City } from './cities.entity';

@Injectable()
export class CitiesService {
     constructor(@InjectRepository(CityRepo) private CityRepo: CityRepo) {}

     async getAllCities(req): Promise<City[]> {
          return await this.CityRepo.getAllCities();
        }

        
     async getAllCitiesByCountry_id(country_id): Promise<City[]> {
          return await this.CityRepo.getAllCitiesByCountry_id(country_id);
        }

}
