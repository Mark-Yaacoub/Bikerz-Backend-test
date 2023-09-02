import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  Request,
  ValidationPipe,
  Param,
  Get,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdatecategoryDTO, categoryDTO } from './dto/Category.dto';
import { AuthGuard } from '@nestjs/passport';
import { Category } from './category.entity';

@UseGuards(AuthGuard())
@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}


  
  
}
