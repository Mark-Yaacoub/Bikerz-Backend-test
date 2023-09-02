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
exports.blogs = void 0;
const category_entity_1 = require("../category/category.entity");
const typeorm_1 = require("typeorm");
let blogs = class blogs extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], blogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title_en' }),
    __metadata("design:type", String)
], blogs.prototype, "enTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title_ar' }),
    __metadata("design:type", String)
], blogs.prototype, "arTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], blogs.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content_en', type: 'json' }),
    __metadata("design:type", String)
], blogs.prototype, "enContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content_ar', type: 'json' }),
    __metadata("design:type", String)
], blogs.prototype, "arContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seo_title' }),
    __metadata("design:type", String)
], blogs.prototype, "seoTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seo_content' }),
    __metadata("design:type", String)
], blogs.prototype, "seoContent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], blogs.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: '{}' }),
    __metadata("design:type", Array)
], blogs.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id' }),
    __metadata("design:type", Number)
], blogs.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.blogs),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.Category)
], blogs.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'views_count', default: 0 }),
    __metadata("design:type", Number)
], blogs.prototype, "viewsCount", void 0);
blogs = __decorate([
    (0, typeorm_1.Entity)('blogs')
], blogs);
exports.blogs = blogs;
//# sourceMappingURL=blogs.entity.js.map