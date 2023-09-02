"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRulesRepo = void 0;
const typeorm_1 = require("typeorm");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
const userRule_entity_1 = require("./userRule.entity");
const common_1 = require("@nestjs/common");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
let userRulesRepo = class userRulesRepo extends typeorm_1.Repository {
    async createUserRule(dto) {
        const { user_id, rule_id, status, created_by } = dto;
        const userRule = new userRule_entity_1.userRules();
        userRule.user_id = user_id;
        userRule.rule_id = rule_id;
        userRule.status = lookup_enum_1.LookupEnum.Enabled;
        userRule.created_by = created_by;
        try {
            await userRule.save();
            return userRule;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY')
                return {
                    status: 403,
                    error_en: err_enum_1.ErrorEnum.DUPLICATE_VALUE_EN,
                    error_ar: err_enum_1.ErrorEnum.DUPLICATE_VALUE_AR,
                };
        }
    }
    async getAllUserRules() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
        SELECT * FROM userRules
      `);
        });
        return data;
    }
    async getAll() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT *  FROM userRules`);
        });
        return data;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(userRule_entity_1.userRules, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(userRule_entity_1.userRules, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update rules set status = '${status}' where rule_id = '${id}'`);
            return {
                data,
                status: 200,
                message_En: 'Update rule successfully',
                message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change rule');
        }
    }
    async getUserRule(userId) {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
      SELECT *
      FROM userRules
      JOIN rules ON userRules.rule_id = rules.rule_id
      WHERE userRules.User_id = ${userId}`);
        });
        return data;
    }
};
userRulesRepo = __decorate([
    (0, typeorm_1.EntityRepository)(userRule_entity_1.userRules)
], userRulesRepo);
exports.userRulesRepo = userRulesRepo;
//# sourceMappingURL=userRule.repo.js.map