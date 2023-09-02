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
exports.User_screensService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_screens_repo_1 = require("./user_screens.repo");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
let User_screensService = class User_screensService {
    constructor(userScreensRepo) {
        this.userScreensRepo = userScreensRepo;
    }
    async createuserScreens(dto) {
        return await this.userScreensRepo.createuserScreens(dto);
    }
    async getOneuserScreens(id) {
        const rule = await this.userScreensRepo.findOne(id);
        if (!rule) {
            throw new common_1.NotFoundException(`Screen user id ${id} is not found`);
        }
        return rule;
    }
    async update(id, dto) {
        try {
            const ScreenUser = await this.userScreensRepo.findOne(id);
            const updated = Object.assign(ScreenUser, dto);
            let update = await this.userScreensRepo.save(updated);
            return { status: 200, rule: update };
        }
        catch (err) {
        }
    }
    async delete(id) {
        let deleted;
        try {
            const UserScrren = await this.userScreensRepo.findOne(id);
            if (UserScrren.status != lookup_enum_1.LookupEnum.Enabled) {
                deleted = await this.userScreensRepo.delete(id);
                return { status: 200 };
            }
            else {
                return {
                    status: 400,
                    error_en: err_enum_1.ErrorEnum.ENABLED_ERROR_EN,
                    error_ar: err_enum_1.ErrorEnum.ENABLED_ERROR_AR,
                };
            }
        }
        catch (err) { }
        if (!deleted.affected) {
            throw new common_1.NotFoundException(`userRules id ${id} is not found`);
        }
    }
    async getStatus(status) {
        return await this.userScreensRepo.getStatus(status);
    }
    async getAllActiveuserScreens() {
        return await this.userScreensRepo.getAllByStatus();
    }
    async getAlluserScreens(req) {
        return await this.userScreensRepo.getAll();
    }
    async changeStatus(id, updateStatusDto) {
        try {
            let updateCustomer = await this.userScreensRepo.changeStatus(id, updateStatusDto.status);
            return { status: 200, updateCustomer };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('An error occurred, please try again');
        }
    }
    async getAllScrrenByUser(user_id) {
        return await this.userScreensRepo.getAllScrrenByUser(user_id);
    }
};
User_screensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_screens_repo_1.userScreensRepo)),
    __metadata("design:paramtypes", [user_screens_repo_1.userScreensRepo])
], User_screensService);
exports.User_screensService = User_screensService;
//# sourceMappingURL=user_screens.service.js.map