"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_repo_1 = require("../user/user.repo");
const jwt_1 = require("@nestjs/jwt");
const userRule_service_1 = require("../userRule/userRule.service");
const userRule_repo_1 = require("../userRule/userRule.repo");
const sendemail_service_1 = require("../SendEmail/sendemail.service");
const user_service_1 = require("../user/user.service");
const cities_service_1 = require("../cities/cities.service");
const cites_repo_1 = require("../cities/cites.repo");
const countries_service_1 = require("../countries/countries.service");
const countries_repo_1 = require("../countries/countries.repo");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_repo_1.UserRepo,
                userRule_repo_1.userRulesRepo,
                cites_repo_1.CityRepo,
                countries_repo_1.CountriesRepo,
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'defaultsecrete',
                signOptions: {
                    expiresIn: '12h',
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            countries_service_1.CountriesService,
            cities_service_1.CitiesService,
            auth_service_1.AuthService,
            sendemail_service_1.SendEmailService,
            user_repo_1.UserRepo,
            userRule_service_1.UserRuleService,
            user_service_1.UserService,
            userRule_repo_1.userRulesRepo,
            jwt_strategy_1.jwtStrategy
        ],
        exports: [jwt_strategy_1.jwtStrategy, passport_1.PassportModule, jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map