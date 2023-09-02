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
exports.UserRuleService = void 0;
const common_1 = require("@nestjs/common");
const userRule_repo_1 = require("./userRule.repo");
const typeorm_1 = require("@nestjs/typeorm");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
let UserRuleService = class UserRuleService {
    constructor(userRulesRepo) {
        this.userRulesRepo = userRulesRepo;
    }
    async createUserRule(dto) {
        return await this.userRulesRepo.createUserRule(dto);
    }
    async getOneUserRules(id) {
        const rule = await this.userRulesRepo.findOne(id);
        if (!rule) {
            throw new common_1.NotFoundException(`userRules id ${id} is not found`);
        }
        return rule;
    }
    async updateUsersRule(id, dto) {
        try {
            const UsersRule = await this.userRulesRepo.findOne(id);
            const updated = Object.assign(UsersRule, dto);
            let update = await this.userRulesRepo.save(updated);
            return { status: 200, rule: update };
        }
        catch (err) {
        }
    }
    async delete(id) {
        let deleted;
        try {
            const UsersRule = await this.userRulesRepo.findOne(id);
            if (UsersRule.status != lookup_enum_1.LookupEnum.Enabled) {
                deleted = await this.userRulesRepo.delete(id);
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
        return await this.userRulesRepo.getStatus(status);
    }
    async getAllActiveRules() {
        return await this.userRulesRepo.getAllByStatus();
    }
    async getAllRules(req) {
        return await this.userRulesRepo.getAll();
    }
    async changeStatus(id, updateStatusDto) {
        try {
            let updateCustomer = await this.userRulesRepo.changeStatus(id, updateStatusDto.status);
            return { status: 200, updateCustomer };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('An error occurred, please try again');
        }
    }
};
UserRuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userRule_repo_1.userRulesRepo)),
    __metadata("design:paramtypes", [userRule_repo_1.userRulesRepo])
], UserRuleService);
exports.UserRuleService = UserRuleService;
//# sourceMappingURL=userRule.service.js.map