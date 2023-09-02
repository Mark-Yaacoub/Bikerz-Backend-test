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
exports.ScreenRulesDto = void 0;
const class_validator_1 = require("class-validator");
class ScreenRulesDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ScreenRulesDto.prototype, "rule_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ScreenRulesDto.prototype, "screen_id", void 0);
__decorate([
    (0, class_validator_1.IsIn)([1, 59]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ScreenRulesDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ScreenRulesDto.prototype, "created_by", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ScreenRulesDto.prototype, "updated_by", void 0);
exports.ScreenRulesDto = ScreenRulesDto;
//# sourceMappingURL=ScreenRules.dto.js.map