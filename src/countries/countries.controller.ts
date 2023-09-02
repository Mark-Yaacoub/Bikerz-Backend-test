
import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Countries } from './countries.entity';

@Controller('Countries')
export class CountriesController {
    constructor(private CountriesService: CountriesService) {}

    @Get('/gatAllActiveCountries')
    getAllActiveCountries(): Promise<Countries[]> {
      return this.CountriesService.getAllActiveCountries();
    }
}
