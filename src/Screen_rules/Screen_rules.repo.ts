import { EntityRepository, Repository, getManager } from 'typeorm';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';

import { NotAcceptableException } from '@nestjs/common';
import { LookupStatus } from 'src/lookupmaster/enums/lookup-status-enum';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';

@EntityRepository(ScreenRules)
export class ScreenRulesRepo extends Repository<ScreenRules> {
  status: any;
  async createScreenRules(dto: ScreenRulesDto): Promise<any> {
    const { screen_id, rule_id, status, created_by } = dto;

    const ScreenRule = new ScreenRules();
    ScreenRule.screen_id = screen_id;
    ScreenRule.rule_id = rule_id;
    ScreenRule.status = LookupEnum.Enabled;
    ScreenRule.created_by = created_by;
    try {
      await ScreenRule.save();
      return ScreenRule;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY')
        return {
          status: 403,
          error_en: ErrorEnum.DUPLICATE_VALUE_EN,
          error_ar: ErrorEnum.DUPLICATE_VALUE_AR,
        };
    }
  }

  async getAllScreenRule(): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
        SELECT * FROM screen_rules
      `);
    });
    return data;
  }

  async getAll(): Promise<ScreenRules[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`SELECT *  FROM screen_rules`);
    });
    return data;
  }

  async getStatus(status: number): Promise<ScreenRules[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(ScreenRules, 'B')
      .where(`status = ${status}`)
      .execute();
    return data;
  }

  async getAllByStatus(): Promise<ScreenRules[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(ScreenRules, 'B')
      .where(`status = ${LookupStatus.ACTIVE}`)
      .execute();
    return data;
  }

  async changeStatus(id: number, status: number): Promise<any> {
    try {
      let data = await getManager().query(
        `update ScreenRules set status = '${status}' where screen_rule_id = '${id}'`,
      );
      return {
        data,
        status: 200,
        message_En: 'Update screen_rule successfully',
        message_Ar: 'تم تعديل الخطه بنجاح',
      };
    } catch (err) {
      throw new NotAcceptableException('error in Change rule');
    }
  }
}
