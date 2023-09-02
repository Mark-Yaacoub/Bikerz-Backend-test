import { EntityRepository, Repository, getManager } from "typeorm";
import { rules } from "./rules.entity";
import { RulesDTO } from "./dto/rules.dto";
import { LookupEnum } from "src/shared/lookup.enum";
import { LookupStatus } from "src/lookupmaster/enums/lookup-status-enum";
import { NotAcceptableException } from "@nestjs/common";
@EntityRepository(rules)
export class RulesRepo extends Repository<rules> {
     status: LookupEnum;
     async createRule(dto: RulesDTO): Promise<rules> {
          const {
               rule_en,
               rule_ar,
              status,
              type,
              created_by } = dto;
  
          const rule = new rules();
          rule.rule_en = rule_en;
          rule.rule_ar = rule_ar;
          rule.status = LookupEnum.Enabled;
          rule.type = type;
          rule.created_by = created_by;
  
          await rule.save();
          return rule;
      }

      
 async getAll(): Promise<rules[]> {

     let data;
     await getManager().transaction(async manager => {
         data = await manager.query(`SELECT *  FROM rules`);
     });
     return data;
 }

 async getStatus(status: number): Promise<rules[]> {
     let data = await getManager().createQueryBuilder()
         .select('*')
         .from(rules, 'B')
         .where(`status = ${status}`)
         .execute();
     return data;
 }

 async getAllByStatus(): Promise<rules[]> {
     let data = await getManager().createQueryBuilder()
         .select('*')
         .from(rules, 'B')
         .where(`status = ${LookupStatus.ACTIVE}`)
         .execute();
     return data;
 }

 async changeStatus(id: number, status: number): Promise<any> {
    try {
      let data = await getManager().query(
        `update rules set status = '${status}' where rule_id = '${id}'`,
      );
      return { data,status: 200, message_En: 'Update rule successfully',message_Ar: 'تم تعديل الخطه بنجاح',
      };
    } catch (err) {
      throw new NotAcceptableException('error in Change rule');
    }
  }

}
