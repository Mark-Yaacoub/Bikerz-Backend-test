import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  UseGuards,
  Request,
  ValidationPipe,
} from '@nestjs/common';
import { ScreenService } from './screen.service';

// @UseGuards(AuthGuard())
@Controller('screen')
export class ScreenController {
  constructor(private ScreenService: ScreenService) {}

}
