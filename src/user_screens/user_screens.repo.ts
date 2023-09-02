import { EntityRepository, Repository, getManager } from 'typeorm';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';

import { NotAcceptableException } from '@nestjs/common';
import { LookupStatus } from 'src/lookupmaster/enums/lookup-status-enum';
import { userScreens } from './user_screens.entity';
import { userScreensDto } from './dto/userScreens.dto';

@EntityRepository(userScreens)
export class userScreensRepo extends Repository<userScreens> {
  status: any;
  async createuserScreens(dto: userScreensDto): Promise<any> {
    const { screen_id, user_id, status, created_by } = dto;

    const userScreenss = new userScreens();
    userScreenss.screen_id = screen_id;
    userScreenss.user_id = user_id;
    userScreenss.status = LookupEnum.Enabled;
    userScreenss.created_by = created_by;
    try {
      await userScreenss.save();
      return userScreenss;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY')
        return {
          status: 403,
          error_en: ErrorEnum.DUPLICATE_VALUE_EN,
          error_ar: ErrorEnum.DUPLICATE_VALUE_AR,
        };
    }
  }

  async getAllScreenUser(): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
        SELECT * FROM user_screens
      `);
    });
    return data;
  }

  async getAll(): Promise<userScreens[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`SELECT *  FROM user_screens`);
    });
    return data;
  }

  async getStatus(status: number): Promise<userScreens[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(userScreens, 'B')
      .where(`status = ${status}`)
      .execute();
    return data;
  }

  async getAllByStatus(): Promise<userScreens[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(userScreens, 'B')
      .where(`status = ${LookupStatus.ACTIVE}`)
      .execute();
    return data;
  }

  async changeStatus(id: number, status: number): Promise<any> {
    try {
      let data = await getManager().query(
        `update user_screens set status = '${status}' where userScreens_id = '${id}'`,
      );
      return {
        data,
        status: 200,
        message_En: 'Update screen_user successfully',
        message_Ar: 'تم تعديل الخطه بنجاح',
      };
    } catch (err) {
      throw new NotAcceptableException('error in Change user_screens');
    }
  }


  async getAllScrrenByUser(user_id : number): Promise<any> {
try {
      let data;
      await getManager().transaction(async (manager) => {
        data = await manager.query(`
        SELECT
        user_screens.*,
        screen.screen_en_name,
        screen.screen_ar_name
    FROM user_screens
        LEFT JOIN screen ON user_screens.screen_id = screen.screen_id
    WHERE
        user_screens.user_id = ${user_id};
        `);
      });
      return data;
} catch (error) {
  // console.log(error);
  
}
  }

}
