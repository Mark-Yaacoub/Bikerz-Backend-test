import { EntityRepository, Repository, getManager } from 'typeorm';
import { UsersRulesDto } from './dto/userRules.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';
import { userRules } from './userRule.entity';
import { NotAcceptableException } from '@nestjs/common';
import { LookupStatus } from 'src/lookupmaster/enums/lookup-status-enum';

@EntityRepository(userRules)
export class userRulesRepo extends Repository<userRulesRepo> {
  status: any;
  async createUserRule(dto: UsersRulesDto): Promise<any> {
    const { user_id, rule_id, status, created_by } = dto;

    const userRule = new userRules();
    userRule.user_id = user_id;
    userRule.rule_id = rule_id;
    userRule.status = LookupEnum.Enabled;
    userRule.created_by = created_by;
    try {
      await userRule.save();
      return userRule;
    } catch (error) {
      // console.log(error);
      
      if (error.code === 'ER_DUP_ENTRY')
        return {
          status: 403,
          error_en: ErrorEnum.DUPLICATE_VALUE_EN,
          error_ar: ErrorEnum.DUPLICATE_VALUE_AR,
        };
    }
  }

  async getAllUserRules(): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
        SELECT * FROM userRules
      `);
    });
    return data;
  }

  async getAll(): Promise<userRules[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`SELECT *  FROM userRules`);
    });
    return data;
  }

  async getStatus(status: number): Promise<userRules[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(userRules, 'B')
      .where(`status = ${status}`)
      .execute();
    return data;
  }

  async getAllByStatus(): Promise<userRules[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(userRules, 'B')
      .where(`status = ${LookupStatus.ACTIVE}`)
      .execute();
    return data;
  }

  async changeStatus(id: number, status: number): Promise<any> {
    try {
      let data = await getManager().query(
        `update rules set status = '${status}' where rule_id = '${id}'`,
      );
      return {
        data,
        status: 200,
        message_En: 'Update rule successfully',
        message_Ar: 'تم تعديل الخطه بنجاح',
      };
    } catch (err) {
      throw new NotAcceptableException('error in Change rule');
    }
  }

  async getUserRule(userId: number): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
      SELECT *
      FROM userRules
      JOIN rules ON userRules.rule_id = rules.rule_id
      WHERE userRules.User_id = ${userId}`);
    });
    return data;
  }
}
