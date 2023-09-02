import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';


import { Module } from '@nestjs/common';
import { UserRepo } from './user.repo';
import { AuthModule } from 'src/auth/auth.module';
import { SendEmailService } from 'src/SendEmail/sendemail.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepo]),AuthModule],
  controllers: [UserController],
  providers: [UserService ,SendEmailService],
})
export class UserModule {}
