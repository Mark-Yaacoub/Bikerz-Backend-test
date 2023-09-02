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
import { UserRuleService } from './userRule.service';
import { UsersRulesDto } from './dto/userRules.dto';
import { userRules } from './userRule.entity';
import { updateStatusDto } from 'src/shared/shard.dto';


import { AuthGuard } from '@nestjs/passport';
// @UseGuards(AuthGuard())
@Controller('userRules')
export class UserRuleController {
  constructor(private UserRuleService: UserRuleService) {}

  @Get('/getRulesByStatus/:status')
  getRulesByStatus(@Param('status') status: number): Promise<userRules[]> {
    return this.UserRuleService.getStatus(status);
  }

  @Get('/getAllActiveRules')
  getAllActiveRules(): Promise<userRules[]> {
    return this.UserRuleService.getAllActiveRules();
  }

  @Get('/:id')
  getOneRule(@Param('id', ParseIntPipe) id: number): Promise<userRules> {
    return this.UserRuleService.getOneUserRules(id);
  }

  @Get()
  getAllRules(@Request() req): Promise<userRules[]> {
    return this.UserRuleService.getAllRules(req);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUserRule(@Body() dto: UsersRulesDto): Promise<userRules> {
    return this.UserRuleService.createUserRule(dto);
  }

  @Put('/:id')
  updateUsersRule(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UsersRulesDto,
  ): Promise<any> {
    return this.UserRuleService.updateUsersRule(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.UserRuleService.delete(id);
  }

  @Put('/status/:id')
  async changeStatus(
    @Body() dto: updateStatusDto,
    @Request() req,
    @Param('id') id: number,
  ): Promise<any> {
    return await this.UserRuleService.changeStatus(id, dto);
  }
}
