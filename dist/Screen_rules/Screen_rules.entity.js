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
exports.ScreenRules = void 0;
const rules_entity_1 = require("../rules/rules.entity");
const screen_entity_1 = require("../screens/screen.entity");
const typeorm_1 = require("typeorm");
let ScreenRules = class ScreenRules extends typeorm_1.BaseEntity {
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'screen_rule_id' }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "screen_rule_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rules_entity_1.rules),
    (0, typeorm_1.JoinColumn)({ name: 'rule_id' }),
    __metadata("design:type", rules_entity_1.rules)
], ScreenRules.prototype, "Rules", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'rule_id', nullable: true }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "rule_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => screen_entity_1.Screen),
    (0, typeorm_1.JoinColumn)({ name: 'screen_id' }),
    __metadata("design:type", screen_entity_1.Screen)
], ScreenRules.prototype, "screen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'screen_id', nullable: true }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "screen_id", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScreenRules.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], ScreenRules.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by', default: null, nullable: true }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScreenRules.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], ScreenRules.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], ScreenRules.prototype, "updated_by", void 0);
ScreenRules = __decorate([
    (0, typeorm_1.Entity)('screen_rules')
], ScreenRules);
exports.ScreenRules = ScreenRules;
//# sourceMappingURL=Screen_rules.entity.js.map