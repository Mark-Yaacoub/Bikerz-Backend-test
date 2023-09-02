"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityRepo = void 0;
const typeorm_1 = require("typeorm");
const cities_entity_1 = require("./cities.entity");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const common_1 = require("@nestjs/common");
let CityRepo = class CityRepo extends typeorm_1.Repository {
    async getAllCities() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
        SELECT * FROM cities
      `);
        });
        return data;
    }
    async getAllCitiesByCountry_id(country_id) {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
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
    async getAll() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT *  FROM cities`);
        });
        return data;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(cities_entity_1.City, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(cities_entity_1.City, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update cities set status = '${status}' where city_id = '${id}'`);
            return {
                data,
                status: 200,
                message_En: 'Update cities successfully',
                message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change ');
        }
    }
};
CityRepo = __decorate([
    (0, typeorm_1.EntityRepository)(cities_entity_1.City)
], CityRepo);
exports.CityRepo = CityRepo;
//# sourceMappingURL=cites.repo.js.map