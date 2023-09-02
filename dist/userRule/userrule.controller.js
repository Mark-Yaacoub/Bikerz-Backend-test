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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRuleController = void 0;
const common_1 = require("@nestjs/common");
const userRule_service_1 = require("./userRule.service");
const userRules_dto_1 = require("./dto/userRules.dto");
const shard_dto_1 = require("../shared/shard.dto");
let UserRuleController = class UserRuleController {
    constructor(UserRuleService) {
        this.UserRuleService = UserRuleService;
    }
    getRulesByStatus(status) {
        return this.UserRuleService.getStatus(status);
    }
    getAllActiveRules() {
        return this.UserRuleService.getAllActiveRules();
    }
    getOneRule(id) {
        return this.UserRuleService.getOneUserRules(id);
    }
    getAllRules(req) {
        return this.UserRuleService.getAllRules(req);
    }
    createUserRule(dto) {
        return this.UserRuleService.createUserRule(dto);
    }
    updateUsersRule(id, dto) {
        return this.UserRuleService.updateUsersRule(id, dto);
    }
    delete(id) {
        return this.UserRuleService.delete(id);
    }
    async changeStatus(dto, req, id) {
        return await this.UserRuleService.changeStatus(id, dto);
    }
};
__decorate([
    (0, common_1.Get)('/getRulesByStatus/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "getRulesByStatus", null);
__decorate([
    (0, common_1.Get)('/getAllActiveRules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "getAllActiveRules", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "getOneRule", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "getAllRules", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userRules_dto_1.UsersRulesDto]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "createUserRule", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, userRules_dto_1.UsersRulesDto]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "updateUsersRule", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shard_dto_1.updateStatusDto, Object, Number]),
    __metadata("design:returntype", Promise)
], UserRuleController.prototype, "changeStatus", null);
UserRuleController = __decorate([
    (0, common_1.Controller)('userRules'),
    __metadata("design:paramtypes", [userRule_service_1.UserRuleService])
], UserRuleController);
exports.UserRuleController = UserRuleController;
//# sourceMappingURL=userrule.controller.js.map