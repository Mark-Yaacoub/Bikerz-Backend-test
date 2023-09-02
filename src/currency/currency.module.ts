import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyController } from './currency.controller';
import { currencyRepo } from './currency.repo';
import { CurrencyService } from './currency.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([currencyRepo])],
    controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
 