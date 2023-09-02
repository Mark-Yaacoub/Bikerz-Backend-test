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
exports.Screen = void 0;
const typeorm_1 = require("typeorm");
let Screen = class Screen extends typeorm_1.BaseEntity {
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'screen_id' }),
    __metadata("design:type", Number)
], Screen.prototype, "screen_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'screen_ar_name', length: 250 }),
    __metadata("design:type", String)
], Screen.prototype, "screen_ar_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'screen_en_name', length: 250 }),
    __metadata("design:type", String)
], Screen.prototype, "screen_en_name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], Screen.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'screen_category' }),
    __metadata("design:type", Number)
], Screen.prototype, "screen_category", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Screen.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], Screen.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], Screen.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Screen.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], Screen.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], Screen.prototype, "updated_by", void 0);
Screen = __decorate([
    (0, typeorm_1.Entity)('screen')
], Screen);
exports.Screen = Screen;
//# sourceMappingURL=screen.entity.js.map