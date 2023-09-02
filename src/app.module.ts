
import { CategoryModule } from './category/category.module';
import { CountriesModule } from './countries/countries.module';
import { UserRuleModule } from './userRule/userRule.module';
import { User_screensModule } from './user_screens/user_screens.module';
import { Screen_rulesModule } from './Screen_rules/screen_rules.module';
import { RulesModule } from './rules/rules.module';
import { ScreenModule } from './screens/screen.module';
import { LookupDetailsModule } from './LookupDetails/lookupdetails.module';
import { LookupmasterModule } from './lookupmaster/lookupmaster.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { faqModule } from './faq/faq.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './SendEmail/sendemail.module';
import { UserModule } from './user/user.module';
import { CitiesModule } from './cities/cities.module';
import { LessonsModule } from './lessons/lessons.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BlogsModule } from './blogs/blogs.module';
import { ReviewModule } from './review/review.module';
import { TrainerInfoModule } from './trainer_info/trainer_info.module';

@Module({
  imports: [

    CategoryModule,

    CountriesModule,
    faqModule,
    AuthModule,
    UserRuleModule,
    User_screensModule,
    Screen_rulesModule,
    RulesModule,
    ScreenModule,
    LookupDetailsModule,
    LookupmasterModule,
    CitiesModule,
    SendEmailModule,
    AuthModule,
    UserModule,
 
    RulesModule,
    LookupDetailsModule,
    LookupmasterModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    LessonsModule,
    TransactionsModule,
    BlogsModule,
    ReviewModule,
    TrainerInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
