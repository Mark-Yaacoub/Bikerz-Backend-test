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
exports.currency = void 0;
const typeorm_1 = require("typeorm");
let currency = class currency extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "currency_id" }),
    __metadata("design:type", Number)
], currency.prototype, "currency_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "currency_name_en", length: 250 }),
    __metadata("design:type", String)
], currency.prototype, "currency_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "currency_name_ar", length: 250 }),
    __metadata("design:type", String)
], currency.prototype, "currency_name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "status" }),
    __metadata("design:type", Number)
], currency.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "entity_name_en", length: 250 }),
    __metadata("design:type", String)
], currency.prototype, "entity_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "entity_name_ar", length: 250 }),
    __metadata("design:type", String)
], currency.prototype, "entity_name_ar", void 0);
currency = __decorate([
    (0, typeorm_1.Entity)('currency')
], currency);
exports.currency = currency;
//# sourceMappingURL=currency.entity.js.map