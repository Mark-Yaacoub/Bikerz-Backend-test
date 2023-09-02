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
exports.City = void 0;
const countries_entity_1 = require("../countries/countries.entity");
const typeorm_1 = require("typeorm");
let City = class City extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'city_id' }),
    __metadata("design:type", Number)
], City.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], City.prototype, "city_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], City.prototype, "city_name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', default: 1 }),
    __metadata("design:type", Number)
], City.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "country_id" }),
    __metadata("design:type", Number)
], City.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => countries_entity_1.Countries, (countries) => countries.cities),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", countries_entity_1.Countries)
], City.prototype, "countries", void 0);
City = __decorate([
    (0, typeorm_1.Entity)('cities')
], City);
exports.City = City;
//# sourceMappingURL=cities.entity.js.map