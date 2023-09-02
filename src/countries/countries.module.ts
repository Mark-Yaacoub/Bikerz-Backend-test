import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CountriesRepo } from './countries.repo';

@Module({
  imports: [TypeOrmModule.forFeature([CountriesRepo])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
