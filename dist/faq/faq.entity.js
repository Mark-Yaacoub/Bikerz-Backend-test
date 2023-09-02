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
exports.Faq = void 0;
const typeorm_1 = require("typeorm");
let Faq = class Faq extends typeorm_1.BaseEntity {
    insertDates() {
        this.created_date = new Date();
    }
    updateDates() {
        this.updated_date = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "question_id" }),
    __metadata("design:type", Number)
], Faq.prototype, "question_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "question_ar", length: 250, nullable: true }),
    __metadata("design:type", String)
], Faq.prototype, "question_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "question_en", length: 250, nullable: true }),
    __metadata("design:type", String)
], Faq.prototype, "question_en", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "answer_ar", length: 5000, nullable: true }),
    __metadata("design:type", String)
], Faq.prototype, "answer_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "answer_en", length: 5000, nullable: true }),
    __metadata("design:type", String)
], Faq.prototype, "answer_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1 }),
    __metadata("design:type", Number)
], Faq.prototype, "useful", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1 }),
    __metadata("design:type", Number)
], Faq.prototype, "not_useful", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1 }),
    __metadata("design:type", Number)
], Faq.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Faq.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({ name: "created_date", type: "timestamp" }),
    __metadata("design:type", Date)
], Faq.prototype, "created_date", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "created_by", nullable: true }),
    __metadata("design:type", Number)
], Faq.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Faq.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({ name: "updated_date", nullable: true, default: null, type: "timestamp" }),
    __metadata("design:type", Date)
], Faq.prototype, "updated_date", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "updated_by", nullable: true }),
    __metadata("design:type", Number)
], Faq.prototype, "updated_by", void 0);
Faq = __decorate([
    (0, typeorm_1.Entity)('faq')
], Faq);
exports.Faq = Faq;
//# sourceMappingURL=faq.entity.js.map