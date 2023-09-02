import { TypeOrmModule } from '@nestjs/typeorm';
import { User_screensController } from './user_screens.controller';
import { User_screensService } from './user_screens.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { userScreensRepo } from './user_screens.repo';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([userScreensRepo]),AuthModule],
  controllers: [User_screensController],
  providers: [User_screensService],
})
export class User_screensModule {}
