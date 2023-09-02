import { Module } from '@nestjs/common';
import { TrainerInfoService } from './trainer_info.service';
import { TrainerInfoController } from './trainer_info.controller';

@Module({
  providers: [TrainerInfoService],
  controllers: [TrainerInfoController]
})
export class TrainerInfoModule {}
