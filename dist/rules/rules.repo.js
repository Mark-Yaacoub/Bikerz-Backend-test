"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRepo = void 0;
const typeorm_1 = require("typeorm");
const rules_entity_1 = require("./rules.entity");
const lookup_enum_1 = require("../shared/lookup.enum");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const common_1 = require("@nestjs/common");
let RulesRepo = class RulesRepo extends typeorm_1.Repository {
    async createRule(dto) {
        const { rule_en, rule_ar, status, type, created_by } = dto;
        const rule = new rules_entity_1.rules();
        rule.rule_en = rule_en;
        rule.rule_ar = rule_ar;
        rule.status = lookup_enum_1.LookupEnum.Enabled;
        rule.type = type;
        rule.created_by = created_by;
        await rule.save();
        return rule;
    }
    async getAll() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT *  FROM rules`);
        });
        return data;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)().createQueryBuilder()
            .select('*')
            .from(rules_entity_1.rules, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)().createQueryBuilder()
            .select('*')
            .from(rules_entity_1.rules, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update rules set status = '${status}' where rule_id = '${id}'`);
            return { data, status: 200, message_En: 'Update rule successfully', message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change rule');
        }
    }
};
RulesRepo = __decorate([
    (0, typeorm_1.EntityRepository)(rules_entity_1.rules)
], RulesRepo);
exports.RulesRepo = RulesRepo;
//# sourceMappingURL=rules.repo.js.map