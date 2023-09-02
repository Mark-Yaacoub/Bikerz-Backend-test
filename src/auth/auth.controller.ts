import { BadRequestException, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CitiesService } from 'src/cities/cities.service';
import { CountriesService } from 'src/countries/countries.service';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthService: AuthService,
    private UserService: UserService,
    private CitiesService: CitiesService,
    private CountriesService: CountriesService,
  ) {}
}
