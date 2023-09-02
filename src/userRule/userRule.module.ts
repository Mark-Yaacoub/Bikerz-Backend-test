/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserRuleService } from './userRule.service';
import { UserRuleController } from './userrule.controller';
import { userRulesRepo } from './userRule.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([userRulesRepo]),AuthModule],
    controllers: [UserRuleController],
    providers: [UserRuleService],
})
export class UserRuleModule {}
