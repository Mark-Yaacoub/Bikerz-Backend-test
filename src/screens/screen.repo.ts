import { EntityRepository, Repository, getManager } from 'typeorm';
import { Screen } from './screen.entity';
import { ScreenDTO } from './dto/screen.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
import { LookupStatus } from 'src/lookupmaster/enums/lookup-status-enum';
import { NotAcceptableException } from '@nestjs/common';

@EntityRepository(Screen)
export class ScreenRepo extends Repository<ScreenRepo> {
  status: LookupEnum;
  async createScreen(dto: ScreenDTO): Promise<Screen> {
    const {
      screen_ar_name,
      screen_en_name,
      status,
      screen_category,
      created_by,
    } = dto;

    const Screens = new Screen();
    Screens.screen_ar_name = screen_ar_name;
    Screens.screen_en_name = screen_en_name;
    Screens.screen_category = screen_category;
    Screens.status = LookupEnum.Enabled;
    Screens.created_by = created_by;

    await Screens.save();
    return Screens;
  }

  async getStatus(status: number): Promise<Screen[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(Screen, 'B')
      .where(`status = ${status}`)
      .execute();
    return data;
  }

  async getAllByStatus(): Promise<Screen[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(Screen, 'B')
      .where(`status = ${LookupStatus.ACTIVE}`)
      .execute();
    return data;
  }

  async getAllScreens(): Promise<Screen[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query('SELECT * FROM screen');
    });
    return data;
  }

  
 async changeStatus(id: number, status: number): Promise<any> {
     try {
       let data = await getManager().query(
         `update screen set status = '${status}' where screen_id = '${id}'`,
       );
       return { data,status: 200, message_En: 'Update rule successfully',message_Ar: 'تم تعديل الخطه بنجاح',
       };
     } catch (err) {
       throw new NotAcceptableException('error in Change screen');
     }
   }

   
}
