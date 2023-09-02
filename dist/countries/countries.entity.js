"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countries = void 0;
const cities_entity_1 = require("../cities/cities.entity");
const typeorm_1 = require("typeorm");
let Countries = class Countries extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'country_id' }),
    __metadata("design:type", Number)
], Countries.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Countries.prototype, "country_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Countries.prototype, "country_name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', default: 1 }),
    __metadata("design:type", Number)
], Countries.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cities_entity_1.City, (city) => city.countries),
    __metadata("design:type", Array)
], Countries.prototype, "cities", void 0);
Countries = __decorate([
    (0, typeorm_1.Entity)('countries')
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=countries.entity.js.map