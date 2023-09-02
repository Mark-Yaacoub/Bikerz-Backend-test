"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenRulesRepo = void 0;
const typeorm_1 = require("typeorm");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
const common_1 = require("@nestjs/common");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const Screen_rules_entity_1 = require("./Screen_rules.entity");
let ScreenRulesRepo = class ScreenRulesRepo extends typeorm_1.Repository {
    async createScreenRules(dto) {
        const { screen_id, rule_id, status, created_by } = dto;
        const ScreenRule = new Screen_rules_entity_1.ScreenRules();
        ScreenRule.screen_id = screen_id;
        ScreenRule.rule_id = rule_id;
        ScreenRule.status = lookup_enum_1.LookupEnum.Enabled;
        ScreenRule.created_by = created_by;
        try {
            await ScreenRule.save();
            return ScreenRule;
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
    async getAllScreenRule() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
        SELECT * FROM screen_rules
      `);
        });
        return data;
    }
    async getAll() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT *  FROM screen_rules`);
        });
        return data;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(Screen_rules_entity_1.ScreenRules, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(Screen_rules_entity_1.ScreenRules, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update ScreenRules set status = '${status}' where screen_rule_id = '${id}'`);
            return {
                data,
                status: 200,
                message_En: 'Update screen_rule successfully',
                message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change rule');
        }
    }
};
ScreenRulesRepo = __decorate([
    (0, typeorm_1.EntityRepository)(Screen_rules_entity_1.ScreenRules)
], ScreenRulesRepo);
exports.ScreenRulesRepo = ScreenRulesRepo;
//# sourceMappingURL=Screen_rules.repo.js.map