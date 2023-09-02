"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRepo = void 0;
const typeorm_1 = require("typeorm");
const countries_entity_1 = require("./countries.entity");
let CountriesRepo = class CountriesRepo extends typeorm_1.Repository {
    async getAllActiveCountries() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
      SELECT country_id,country_name_en,country_name_ar FROM countries WHERE status = 1;
      `);
        });
        return data;
    }
};
CountriesRepo = __decorate([
    (0, typeorm_1.EntityRepository)(countries_entity_1.Countries)
], CountriesRepo);
exports.CountriesRepo = CountriesRepo;
//# sourceMappingURL=countries.repo.js.map