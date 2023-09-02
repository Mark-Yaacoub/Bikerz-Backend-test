import { LookupmasterController } from './lookupmaster.controller';
import { LookupmasterService } from './lookupmaster.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LookupmasterController],
  providers: [LookupmasterService],
})
export class LookupmasterModule {}
