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
exports.Category = void 0;
const blogs_entity_1 = require("../blogs/blogs.entity");
const lessons_entity_1 = require("../lessons/lessons.entity");
const typeorm_1 = require("typeorm");
let Category = class Category extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "category_name_en", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "category_name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', default: 1 }),
    __metadata("design:type", Number)
], Category.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => blogs_entity_1.blogs, (blog) => blog.category),
    __metadata("design:type", Array)
], Category.prototype, "blogs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lessons_entity_1.lesson, (lesson) => lesson.category),
    __metadata("design:type", Array)
], Category.prototype, "lesson", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)('Category')
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map