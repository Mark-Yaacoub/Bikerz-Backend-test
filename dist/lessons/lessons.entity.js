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
exports.lesson = void 0;
const category_entity_1 = require("../category/category.entity");
const typeorm_1 = require("typeorm");
let lesson = class lesson extends typeorm_1.BaseEntity {
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "lesson_id" }),
    __metadata("design:type", Number)
], lesson.prototype, "lesson_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title_name_en", length: 250 }),
    __metadata("design:type", String)
], lesson.prototype, "title_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title_name_ar", length: 250 }),
    __metadata("design:type", String)
], lesson.prototype, "title_name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "link", length: 250 }),
    __metadata("design:type", String)
], lesson.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "content", length: 250 }),
    __metadata("design:type", String)
], lesson.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "status" }),
    __metadata("design:type", Number)
], lesson.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "price" }),
    __metadata("design:type", Number)
], lesson.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], lesson.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], lesson.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], lesson.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], lesson.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], lesson.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], lesson.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id' }),
    __metadata("design:type", Number)
], lesson.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.blogs),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.Category)
], lesson.prototype, "category", void 0);
lesson = __decorate([
    (0, typeorm_1.Entity)('lesson')
], lesson);
exports.lesson = lesson;
//# sourceMappingURL=lessons.entity.js.map