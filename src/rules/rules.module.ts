import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesController } from './rules.controller';
import { RulesRepo } from './rules.repo';
import { RulesService } from './rules.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([RulesRepo])],
  controllers: [RulesController],
  providers: [RulesService],
})
export class RulesModule {}
