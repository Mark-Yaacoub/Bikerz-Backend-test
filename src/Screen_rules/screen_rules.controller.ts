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
import { Screen_rulesService } from './screen_rules.service';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';
import { updateStatusDto } from 'src/shared/shard.dto';

import { AuthGuard } from '@nestjs/passport';
// @UseGuards(AuthGuard())
@Controller('ScreenRules')
export class Screen_rulesController {
  constructor(private Screen_rulesService: Screen_rulesService) {}

  @Get('/getRulesByStatus/:status')
  getRulesByStatus(@Param('status') status: number): Promise<ScreenRules[]> {
    return this.Screen_rulesService.getStatus(status);
  }

  @Get('/getAllActiveRules')
  getAllActiveRules(): Promise<ScreenRules[]> {
    return this.Screen_rulesService.getAllActiveRules();
  }

  @Get('/:id')
  getOneRule(@Param('id', ParseIntPipe) id: number): Promise<ScreenRules> {
    return this.Screen_rulesService.getOneScreenRules(id);
  }

  @Get()
  getAllRules(@Request() req): Promise<ScreenRules[]> {
    return this.Screen_rulesService.getAllSCreenRules(req);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUserRule(@Body() dto: ScreenRulesDto): Promise<ScreenRules> {
    return this.Screen_rulesService.createScreenRules(dto);
  }

  @Put('/:id')
  updateUsersRule(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ScreenRulesDto,
  ): Promise<any> {
    return this.Screen_rulesService.updateScreenRules(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.Screen_rulesService.delete(id);
  }

  @Put('/status/:id')
  async changeStatus(
    @Body() dto: updateStatusDto,
    @Request() req,
    @Param('id') id: number,
  ): Promise<any> {
    return await this.Screen_rulesService.changeStatus(id, dto);
  }
}
