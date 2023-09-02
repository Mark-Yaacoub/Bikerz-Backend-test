"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userScreensRepo = void 0;
const typeorm_1 = require("typeorm");
const lookup_enum_1 = require("../shared/lookup.enum");
const err_enum_1 = require("../shared/err.enum");
const common_1 = require("@nestjs/common");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const user_screens_entity_1 = require("./user_screens.entity");
let userScreensRepo = class userScreensRepo extends typeorm_1.Repository {
    async createuserScreens(dto) {
        const { screen_id, user_id, status, created_by } = dto;
        const userScreenss = new user_screens_entity_1.userScreens();
        userScreenss.screen_id = screen_id;
        userScreenss.user_id = user_id;
        userScreenss.status = lookup_enum_1.LookupEnum.Enabled;
        userScreenss.created_by = created_by;
        try {
            await userScreenss.save();
            return userScreenss;
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
    async getAllScreenUser() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
        SELECT * FROM user_screens
      `);
        });
        return data;
    }
    async getAll() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT *  FROM user_screens`);
        });
        return data;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(user_screens_entity_1.userScreens, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(user_screens_entity_1.userScreens, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update user_screens set status = '${status}' where userScreens_id = '${id}'`);
            return {
                data,
                status: 200,
                message_En: 'Update screen_user successfully',
                message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change user_screens');
        }
    }
    async getAllScrrenByUser(user_id) {
        try {
            let data;
            await (0, typeorm_1.getManager)().transaction(async (manager) => {
                data = await manager.query(`
        SELECT
        user_screens.*,
        screen.screen_en_name,
        screen.screen_ar_name
    FROM user_screens
        LEFT JOIN screen ON user_screens.screen_id = screen.screen_id
    WHERE
        user_screens.user_id = ${user_id};
        `);
            });
            return data;
        }
        catch (error) {
        }
    }
};
userScreensRepo = __decorate([
    (0, typeorm_1.EntityRepository)(user_screens_entity_1.userScreens)
], userScreensRepo);
exports.userScreensRepo = userScreensRepo;
//# sourceMappingURL=user_screens.repo.js.map