import { EntityRepository, Repository, getManager } from "typeorm";
import { City } from "./cities.entity";
import { LookupStatus } from "src/lookupmaster/enums/lookup-status-enum";
import { NotAcceptableException } from "@nestjs/common";


@EntityRepository(City)
export class CityRepo extends Repository<CityRepo> {

  async getAllCities(): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
        SELECT * FROM cities
      `);
    });
    return data;
  }

  async getAllCitiesByCountry_id(country_id : number): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
      SELECT
       city_id,
       city_name_en,
       city_name_ar,
       status,
       country_id
   FROM cities WHERE cities.country_id = ${country_id};
      `);
    });
    return data;
  }

  async getAll(): Promise<City[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`SELECT *  FROM cities`);
    });
    return data;
  }

  async getStatus(status: number): Promise<City[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(City, 'B')
      .where(`status = ${status}`)
      .execute();
    return data;
   }

  async getAllByStatus(): Promise<City[]> {
    let data = await getManager()
      .createQueryBuilder()
      .select('*')
      .from(City, 'B')
      .where(`status = ${LookupStatus.ACTIVE}`)
      .execute();
    return data;
  }

  async changeStatus(id: number, status: number): Promise<any> {
    try {
      let data = await getManager().query(
        `update cities set status = '${status}' where city_id = '${id}'`,
      );
      return {
        data,
        status: 200,
        message_En: 'Update cities successfully',
        message_Ar: 'تم تعديل الخطه بنجاح',
      };
    } catch (err) {
      throw new NotAcceptableException('error in Change ');
    }
  }
}