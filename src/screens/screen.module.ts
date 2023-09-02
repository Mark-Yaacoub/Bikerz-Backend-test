import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ScreenController } from './screen.controller';
import { ScreenService } from './screen.service';
import { ScreenRepo } from './screen.repo';
import { AuthModule } from 'src/auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forFeature([ScreenRepo]),
    AuthModule,
  ],
  controllers: [ScreenController],
  providers: [ScreenService],
})
export class ScreenModule {}
