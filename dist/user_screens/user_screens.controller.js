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
exports.User_screensController = void 0;
const common_1 = require("@nestjs/common");
const user_screens_service_1 = require("./user_screens.service");
const userScreens_dto_1 = require("./dto/userScreens.dto");
let User_screensController = class User_screensController {
    constructor(User_screensService) {
        this.User_screensService = User_screensService;
    }
    getStatus(status) {
        return this.User_screensService.getStatus(status);
    }
    getAllActiveUserScreens() {
        return this.User_screensService.getAllActiveuserScreens();
    }
    getOne(id) {
        return this.User_screensService.getOneuserScreens(id);
    }
    getAll(req) {
        return this.User_screensService.getAlluserScreens(req);
    }
    createuserScreens(dto) {
        return this.User_screensService.createuserScreens(dto);
    }
    updateUsersRule(id, dto) {
        return this.User_screensService.update(id, dto);
    }
    delete(id) {
        return this.User_screensService.delete(id);
    }
    async changeStatus(dto, req, id) {
        return await this.User_screensService.changeStatus(id, dto);
    }
};
__decorate([
    (0, common_1.Get)('/getScreenUserByStatus/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Get)('/getAllActiveScreenUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "getAllActiveUserScreens", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userScreens_dto_1.userScreensDto]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "createuserScreens", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, userScreens_dto_1.userScreensDto]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "updateUsersRule", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userScreens_dto_1.userScreensDto, Object, Number]),
    __metadata("design:returntype", Promise)
], User_screensController.prototype, "changeStatus", null);
User_screensController = __decorate([
    (0, common_1.Controller)('userScreens'),
    __metadata("design:paramtypes", [user_screens_service_1.User_screensService])
], User_screensController);
exports.User_screensController = User_screensController;
//# sourceMappingURL=user_screens.controller.js.map