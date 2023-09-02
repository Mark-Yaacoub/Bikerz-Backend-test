

import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userScreensRepo } from './user_screens.repo';
import { userScreensDto } from './dto/userScreens.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';
import { userScreens } from './user_screens.entity';

@Injectable()
export class User_screensService {
     constructor(
          @InjectRepository(userScreensRepo) private userScreensRepo: userScreensRepo,
        ) {}
      
        async createuserScreens(dto: userScreensDto): Promise<userScreens> {
           return await this.userScreensRepo.createuserScreens(dto);
         }
       
         async getOneuserScreens(id: number): Promise<any> {
           const rule = await this.userScreensRepo.findOne(id);
           if (!rule) {
             throw new NotFoundException(`Screen user id ${id} is not found`);
           }
           return rule;
         }
       
         async update(id: number, dto: userScreensDto): Promise<any> {
           try {
             const ScreenUser = await this.userScreensRepo.findOne(id);
             const updated = Object.assign(ScreenUser, dto);
             let update = await this.userScreensRepo.save(updated);
             return { status: 200, rule: update };
           } catch (err) {
             // console.log(err)
           }
         }
       
         async delete(id: number): Promise<any> {
           let deleted;
           try {
             const UserScrren = await this.userScreensRepo.findOne(id);
             if (UserScrren.status != LookupEnum.Enabled) {
               deleted = await this.userScreensRepo.delete(id);
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
       
         async getStatus(status: number): Promise<userScreens[]> {
           return await this.userScreensRepo.getStatus(status);
         }
       
         async getAllActiveuserScreens(): Promise<userScreens[]> {
           return await this.userScreensRepo.getAllByStatus();
         }
       
         async getAlluserScreens(req): Promise<userScreens[]> {
           return await this.userScreensRepo.getAll();
         }
       
         
         async changeStatus(id: number, updateStatusDto): Promise<any> {
           try {
             let updateCustomer = await this.userScreensRepo.changeStatus( id, updateStatusDto.status);
             return { status: 200, updateCustomer };
           } catch (err) {
             throw new NotAcceptableException('An error occurred, please try again');
           }
         }

         async getAllScrrenByUser(user_id: number): Promise<any> {
          return await this.userScreensRepo.getAllScrrenByUser(user_id);
        }
}
