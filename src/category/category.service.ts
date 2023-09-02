import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CategoryRepo } from './category.repo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepo) private CategoryRepo: CategoryRepo,
  ) {}


  
}
