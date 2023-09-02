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
exports.Screen_rulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Screen_rules_repo_1 = require("./Screen_rules.repo");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
let Screen_rulesService = class Screen_rulesService {
    constructor(ScreenRulesRepo) {
        this.ScreenRulesRepo = ScreenRulesRepo;
    }
    async createScreenRules(dto) {
        return await this.ScreenRulesRepo.createScreenRules(dto);
    }
    async getOneScreenRules(id) {
        const rule = await this.ScreenRulesRepo.findOne(id);
        if (!rule) {
            throw new common_1.NotFoundException(`Screen Rules id ${id} is not found`);
        }
        return rule;
    }
    async updateScreenRules(id, dto) {
        try {
            const ScreenRules = await this.ScreenRulesRepo.findOne(id);
            const updated = Object.assign(ScreenRules, dto);
            let update = await this.ScreenRulesRepo.save(updated);
            return { status: 200, rule: update };
        }
        catch (err) {
        }
    }
    async delete(id) {
        let deleted;
        try {
            const UsersRule = await this.ScreenRulesRepo.findOne(id);
            if (UsersRule.status != lookup_enum_1.LookupEnum.Enabled) {
                deleted = await this.ScreenRulesRepo.delete(id);
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
        return await this.ScreenRulesRepo.getStatus(status);
    }
    async getAllActiveRules() {
        return await this.ScreenRulesRepo.getAllByStatus();
    }
    async getAllSCreenRules(req) {
        return await this.ScreenRulesRepo.getAll();
    }
    async changeStatus(id, updateStatusDto) {
        try {
            let updateCustomer = await this.ScreenRulesRepo.changeStatus(id, updateStatusDto.status);
            return { status: 200, updateCustomer };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('An error occurred, please try again');
        }
    }
};
Screen_rulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Screen_rules_repo_1.ScreenRulesRepo)),
    __metadata("design:paramtypes", [Screen_rules_repo_1.ScreenRulesRepo])
], Screen_rulesService);
exports.Screen_rulesService = Screen_rulesService;
//# sourceMappingURL=screen_rules.service.js.map