/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { LookupDetailsController } from './lookupdetails.controller';
import { LookupDetailsService } from './lookupdetails.service';

@Module({
    imports: [],
    controllers: [LookupDetailsController],
    providers: [LookupDetailsService],
})
export class LookupDetailsModule {}
