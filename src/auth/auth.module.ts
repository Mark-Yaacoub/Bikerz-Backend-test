import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepo } from 'src/user/user.repo';
import { JwtModule } from '@nestjs/jwt';
import { UserRuleService } from 'src/userRule/userRule.service';
import { userRulesRepo } from 'src/userRule/userRule.repo';

import { SendEmailService } from 'src/SendEmail/sendemail.service';
import { UserService } from 'src/user/user.service';
import { CitiesService } from 'src/cities/cities.service';
import { CityRepo } from 'src/cities/cites.repo';
import { CountriesService } from 'src/countries/countries.service';
import { CountriesRepo } from 'src/countries/countries.repo';

import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepo,
      userRulesRepo,
      CityRepo,
      CountriesRepo,

    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    JwtModule.register({
      secret: 'defaultsecrete',
      signOptions: {
        expiresIn: '12h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [

    CountriesService,
    CitiesService,
    AuthService,
    SendEmailService,
    UserRepo,
    UserRuleService,
    UserService,
    userRulesRepo,
    jwtStrategy
  ],
  exports: [jwtStrategy, PassportModule ,JwtModule],

})
export class AuthModule {}
