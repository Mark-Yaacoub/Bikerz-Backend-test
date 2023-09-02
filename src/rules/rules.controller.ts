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
import { RulesService } from './rules.service';
import { rules } from './rules.entity';
import { RulesDTO } from './dto/rules.dto';
import { updateStatusDto } from 'src/shared/shard.dto';

@Controller('rules')
export class RulesController {
  constructor(private ruleService: RulesService) {}

  // @Get('/getRulesByStatus/:status')
  // getRulesByStatus(@Param('status') status: number): Promise<rules[]> {
  //   return this.ruleService.getStatus(status);
  // }

  // @Get('/getAllActiveRules')
  // getAllActiveRules(): Promise<rules[]> {
  //   return this.ruleService.getAllActiveRules();
  // }

  // @Get('/:id')
  // getOneRule(@Param('id', ParseIntPipe) id: number): Promise<rules> {
  //   return this.ruleService.getOneRule(id);
  // }

  // @Get()
  // getAllRules(@Request() req): Promise<rules[]> {
  //   return this.ruleService.getAllRules(req);
  // }

  // @Post()
  // @UsePipes(new ValidationPipe())
  // createRule(@Body() dto: RulesDTO): Promise<rules> {
  //   return this.ruleService.createRule(dto);
  // }

  // @Put('/:id')
  // updateRule(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() dto: RulesDTO,
  // ): Promise<any> {
  //   return this.ruleService.updateRule(id, dto);
  // }

  // @Delete('/:id')
  // deleteRule(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.ruleService.deleteRule(id);
  // }

  // @Put('/status/:id')
  // async changeStatus(@Body() dto: updateStatusDto,@Request() req,@Param('id') id: number,): Promise<any> {
  //   return await this.ruleService.changeStatus(id, dto);
  // };
}
