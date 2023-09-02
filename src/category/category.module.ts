import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryRepo } from './category.repo';
import { CategoryService } from './category.service';
import {Module} from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepo]),
    AuthModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService ,],
})
export class CategoryModule {}