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
exports.updateQuestionStatusDto = exports.updateFaqDto = exports.faqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class faqDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "question arabic",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], faqDto.prototype, "question_ar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "question english",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], faqDto.prototype, "question_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "answer arabic",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], faqDto.prototype, "answer_ar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "answer english",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], faqDto.prototype, "answer_en", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "useful question",
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], faqDto.prototype, "useful", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "not useful question",
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], faqDto.prototype, "not_useful", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], faqDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], faqDto.prototype, "created_by", void 0);
exports.faqDto = faqDto;
;
class updateFaqDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "question arabic",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateFaqDto.prototype, "question_ar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "question english",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateFaqDto.prototype, "question_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "answer arabic",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateFaqDto.prototype, "answer_ar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "answer english",
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateFaqDto.prototype, "answer_en", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "useful question",
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], updateFaqDto.prototype, "useful", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "not useful question",
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], updateFaqDto.prototype, "not_useful", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], updateFaqDto.prototype, "status", void 0);
exports.updateFaqDto = updateFaqDto;
;
class updateQuestionStatusDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'status ',
        type: Number
    }),
    __metadata("design:type", Number)
], updateQuestionStatusDto.prototype, "status", void 0);
exports.updateQuestionStatusDto = updateQuestionStatusDto;
;
//# sourceMappingURL=faq.dto.js.map