/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { userRulesRepo } from './userRule.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRulesDto } from './dto/userRules.dto';
import { userRules } from './userRule.entity';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';

@Injectable()
export class UserRuleService {
  constructor(
    @InjectRepository(userRulesRepo) private userRulesRepo: userRulesRepo,
  ) {}

  
  async createUserRule(dto: UsersRulesDto): Promise<userRules> {
    return await this.userRulesRepo.createUserRule(dto);
  }

  async getOneUserRules(id: number): Promise<any> {
    const rule = await this.userRulesRepo.findOne(id);
    if (!rule) {
      throw new NotFoundException(`userRules id ${id} is not found`);
    }
    return rule;
  }

  async updateUsersRule(id: number, dto: UsersRulesDto): Promise<any> {
    try {
      const UsersRule = await this.userRulesRepo.findOne(id);
      const updated = Object.assign(UsersRule, dto);
      let update = await this.userRulesRepo.save(updated);
      return { status: 200, rule: update };
    } catch (err) {
      // console.log(err)
    }
  }

  async delete(id: number): Promise<any> {
    let deleted;
    try {
      const UsersRule = await this.userRulesRepo.findOne(id);
      if (UsersRule.status != LookupEnum.Enabled) {
        deleted = await this.userRulesRepo.delete(id);
        return { status: 200 };
      } else {
        return {
          status: 400,
          error_en: ErrorEnum.ENABLED_ERROR_EN,
          error_ar: ErrorEnum.ENABLED_ERROR_AR,
        };
      }
    } catch (err) {}

    if (!deleted.affected) {
      throw new NotFoundException(`userRules id ${id} is not found`);
    }
  }

  async getStatus(status: number): Promise<userRules[]> {
    return await this.userRulesRepo.getStatus(status);
  }

  async getAllActiveRules(): Promise<userRules[]> {
    return await this.userRulesRepo.getAllByStatus();
  }

  async getAllRules(req): Promise<userRules[]> {
    return await this.userRulesRepo.getAll();
  }

  
  async changeStatus(id: number, updateStatusDto): Promise<any> {
    try {
      let updateCustomer = await this.userRulesRepo.changeStatus( id, updateStatusDto.status);
      return { status: 200, updateCustomer };
    } catch (err) {
      throw new NotAcceptableException('An error occurred, please try again');
    }
  }
}
