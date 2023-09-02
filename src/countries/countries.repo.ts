import { EntityRepository, Repository, getManager } from 'typeorm';
import { Countries } from './countries.entity';

@EntityRepository(Countries)
export class CountriesRepo extends Repository<CountriesRepo> {
  async getAllActiveCountries(): Promise<Countries[]> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
      SELECT country_id,country_name_en,country_name_ar FROM countries WHERE status = 1;
      `);
    });
    return data;
  }
}
