import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CitiesService } from 'src/cities/cities.service';
import { CountriesService } from 'src/countries/countries.service';
export declare class AuthController {
    private AuthService;
    private UserService;
    private CitiesService;
    private CountriesService;
    constructor(AuthService: AuthService, UserService: UserService, CitiesService: CitiesService, CountriesService: CountriesService);
}
