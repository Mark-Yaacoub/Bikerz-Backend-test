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
exports.Screen_rulesController = void 0;
const common_1 = require("@nestjs/common");
const screen_rules_service_1 = require("./screen_rules.service");
const ScreenRules_dto_1 = require("./dto/ScreenRules.dto");
const shard_dto_1 = require("../shared/shard.dto");
let Screen_rulesController = class Screen_rulesController {
    constructor(Screen_rulesService) {
        this.Screen_rulesService = Screen_rulesService;
    }
    getRulesByStatus(status) {
        return this.Screen_rulesService.getStatus(status);
    }
    getAllActiveRules() {
        return this.Screen_rulesService.getAllActiveRules();
    }
    getOneRule(id) {
        return this.Screen_rulesService.getOneScreenRules(id);
    }
    getAllRules(req) {
        return this.Screen_rulesService.getAllSCreenRules(req);
    }
    createUserRule(dto) {
        return this.Screen_rulesService.createScreenRules(dto);
    }
    updateUsersRule(id, dto) {
        return this.Screen_rulesService.updateScreenRules(id, dto);
    }
    delete(id) {
        return this.Screen_rulesService.delete(id);
    }
    async changeStatus(dto, req, id) {
        return await this.Screen_rulesService.changeStatus(id, dto);
    }
};
__decorate([
    (0, common_1.Get)('/getRulesByStatus/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "getRulesByStatus", null);
__decorate([
    (0, common_1.Get)('/getAllActiveRules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "getAllActiveRules", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "getOneRule", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "getAllRules", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ScreenRules_dto_1.ScreenRulesDto]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "createUserRule", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ScreenRules_dto_1.ScreenRulesDto]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "updateUsersRule", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shard_dto_1.updateStatusDto, Object, Number]),
    __metadata("design:returntype", Promise)
], Screen_rulesController.prototype, "changeStatus", null);
Screen_rulesController = __decorate([
    (0, common_1.Controller)('ScreenRules'),
    __metadata("design:paramtypes", [screen_rules_service_1.Screen_rulesService])
], Screen_rulesController);
exports.Screen_rulesController = Screen_rulesController;
//# sourceMappingURL=screen_rules.controller.js.map