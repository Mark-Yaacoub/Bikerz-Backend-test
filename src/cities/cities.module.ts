import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CityRepo } from './cites.repo';

@Module({
  imports: [TypeOrmModule.forFeature([CityRepo])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
