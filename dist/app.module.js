"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const category_module_1 = require("./category/category.module");
const countries_module_1 = require("./countries/countries.module");
const userRule_module_1 = require("./userRule/userRule.module");
const user_screens_module_1 = require("./user_screens/user_screens.module");
const screen_rules_module_1 = require("./Screen_rules/screen_rules.module");
const rules_module_1 = require("./rules/rules.module");
const screen_module_1 = require("./screens/screen.module");
const lookupdetails_module_1 = require("./LookupDetails/lookupdetails.module");
const lookupmaster_module_1 = require("./lookupmaster/lookupmaster.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const faq_module_1 = require("./faq/faq.module");
const auth_module_1 = require("./auth/auth.module");
const sendemail_module_1 = require("./SendEmail/sendemail.module");
const user_module_1 = require("./user/user.module");
const cities_module_1 = require("./cities/cities.module");
const lessons_module_1 = require("./lessons/lessons.module");
const transactions_module_1 = require("./transactions/transactions.module");
const blogs_module_1 = require("./blogs/blogs.module");
const review_module_1 = require("./review/review.module");
const trainer_info_module_1 = require("./trainer_info/trainer_info.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_module_1.CategoryModule,
            countries_module_1.CountriesModule,
            faq_module_1.faqModule,
            auth_module_1.AuthModule,
            userRule_module_1.UserRuleModule,
            user_screens_module_1.User_screensModule,
            screen_rules_module_1.Screen_rulesModule,
            rules_module_1.RulesModule,
            screen_module_1.ScreenModule,
            lookupdetails_module_1.LookupDetailsModule,
            lookupmaster_module_1.LookupmasterModule,
            cities_module_1.CitiesModule,
            sendemail_module_1.SendEmailModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            rules_module_1.RulesModule,
            lookupdetails_module_1.LookupDetailsModule,
            lookupmaster_module_1.LookupmasterModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            lessons_module_1.LessonsModule,
            transactions_module_1.TransactionsModule,
            blogs_module_1.BlogsModule,
            review_module_1.ReviewModule,
            trainer_info_module_1.TrainerInfoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map