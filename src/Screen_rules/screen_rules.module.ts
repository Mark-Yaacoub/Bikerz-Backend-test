/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Screen_rulesService } from './screen_rules.service';
import { Screen_rulesController } from './screen_rules.controller';
import { ScreenRulesRepo } from './Screen_rules.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([ScreenRulesRepo]),AuthModule],
    controllers: [Screen_rulesController],
    providers: [Screen_rulesService],
})
export class Screen_rulesModule {}
