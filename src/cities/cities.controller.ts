import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  UseGuards,
  Request,
  ValidationPipe,
} from '@nestjs/common';

import { CitiesService } from './cities.service';
import { City } from './cities.entity';

@Controller('city')
export class CitiesController {
  constructor(private CitiesService: CitiesService) {}



  @Get('/getAllCityByCountryId/:country_id')
  getAllCitiesByCountry_id(@Param('country_id') country_id: number): Promise<City[]> {
    return this.CitiesService.getAllCitiesByCountry_id(country_id);
  }

  @Get()
  getAll(@Request() req): Promise<City[]> {
    return this.CitiesService.getAllCities(req);
  }
  
}
