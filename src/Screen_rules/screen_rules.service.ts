/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScreenRulesRepo } from './Screen_rules.repo';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';

@Injectable()
export class Screen_rulesService {
  constructor(
    @InjectRepository(ScreenRulesRepo) private ScreenRulesRepo: ScreenRulesRepo,
  ) {}

  async createScreenRules(dto: ScreenRulesDto): Promise<ScreenRules> {
     return await this.ScreenRulesRepo.createScreenRules(dto);
   }
 
   async getOneScreenRules(id: number): Promise<any> {
     const rule = await this.ScreenRulesRepo.findOne(id);
     if (!rule) {
       throw new NotFoundException(`Screen Rules id ${id} is not found`);
     }
     return rule;
   }
 
   async updateScreenRules(id: number, dto: ScreenRulesDto): Promise<any> {
     try {
       const ScreenRules = await this.ScreenRulesRepo.findOne(id);
       const updated = Object.assign(ScreenRules, dto);
       let update = await this.ScreenRulesRepo.save(updated);
       return { status: 200, rule: update };
     } catch (err) {
       // console.log(err)
     }
   }
 
   async delete(id: number): Promise<any> {
     let deleted;
     try {
       const UsersRule = await this.ScreenRulesRepo.findOne(id);
       if (UsersRule.status != LookupEnum.Enabled) {
         deleted = await this.ScreenRulesRepo.delete(id);
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
 
   async getStatus(status: number): Promise<ScreenRules[]> {
     return await this.ScreenRulesRepo.getStatus(status);
   }
 
   async getAllActiveRules(): Promise<ScreenRules[]> {
     return await this.ScreenRulesRepo.getAllByStatus();
   }
 
   async getAllSCreenRules(req): Promise<ScreenRules[]> {
     return await this.ScreenRulesRepo.getAll();
   }
 
   
   async changeStatus(id: number, updateStatusDto): Promise<any> {
     try {
       let updateCustomer = await this.ScreenRulesRepo.changeStatus( id, updateStatusDto.status);
       return { status: 200, updateCustomer };
     } catch (err) {
       throw new NotAcceptableException('An error occurred, please try again');
     }
   }
}
