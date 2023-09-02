import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { RulesRepo } from './rules.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { RulesDTO } from './dto/rules.dto';
import { rules } from './rules.entity';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';

@Injectable()
export class RulesService {
  constructor(@InjectRepository(RulesRepo) private RulesRepo: RulesRepo) {}

  // async createRule(dto: RulesDTO): Promise<rules> {
  //   return await this.RulesRepo.createRule(dto);
  // }
  // async getOneRule(id: number): Promise<any> {
  //   const rule = await this.RulesRepo.findOne(id);
  //   if (!rule) {
  //     throw new NotFoundException(`Rule id ${id} is not found`);
  //   }
  //   return rule;
  // }

  // async updateRule(id: number, dto: RulesDTO): Promise<any> {
  //   try {
  //     const rule = await this.RulesRepo.findOne(id);
  //     const updated = Object.assign(rule, dto);
  //     let updaterule = await this.RulesRepo.save(updated);
  //     return { status: 200, rule: updaterule };
  //   } catch (err) {
  //     // console.log(err)
  //   }
  // }

  // async deleteRule(id: number): Promise<any> {
  //   let deleted;
  //   try {
  //     const rule = await this.RulesRepo.findOne(id);
  //     if (rule.status != LookupEnum.Enabled) {
  //       deleted = await this.RulesRepo.delete(id);
  //       return { status: 200 };
  //     } else {
  //       return {
  //         status: 400,
  //         error_en: ErrorEnum.ENABLED_ERROR_EN,
  //         error_ar: ErrorEnum.ENABLED_ERROR_AR,
  //       };
  //     }
  //   } catch (err) {}

  //   if (!deleted.affected) {
  //     throw new NotFoundException(`Rule id ${id} is not found`);
  //   }
  // }

  // async getStatus(status: number): Promise<rules[]> {
  //   return await this.RulesRepo.getStatus(status);
  // }

  // async getAllActiveRules(): Promise<rules[]> {
  //   return await this.RulesRepo.getAllByStatus();
  // }

  // async getAllRules(req): Promise<rules[]> {
  //   return await this.RulesRepo.getAll();
  // }

  
  // async changeStatus(id: number, updateStatusDto): Promise<any> {
  //   try {
  //     let updateCustomer = await this.RulesRepo.changeStatus( id, updateStatusDto.status);
  //     return { status: 200, updateCustomer };
  //   } catch (err) {
  //     throw new NotAcceptableException('An error occurred, please try again');
  //   }
  // }
}
