import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { FaqRepository } from './faq.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([FaqRepository]) ,AuthModule],
    controllers: [FaqController],
  providers: [FaqService],
})
export class faqModule {}
