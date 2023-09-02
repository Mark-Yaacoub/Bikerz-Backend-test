"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenRepo = void 0;
const typeorm_1 = require("typeorm");
const screen_entity_1 = require("./screen.entity");
const lookup_enum_1 = require("../shared/lookup.enum");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const common_1 = require("@nestjs/common");
let ScreenRepo = class ScreenRepo extends typeorm_1.Repository {
    async createScreen(dto) {
        const { screen_ar_name, screen_en_name, status, screen_category, created_by, } = dto;
        const Screens = new screen_entity_1.Screen();
        Screens.screen_ar_name = screen_ar_name;
        Screens.screen_en_name = screen_en_name;
        Screens.screen_category = screen_category;
        Screens.status = lookup_enum_1.LookupEnum.Enabled;
        Screens.created_by = created_by;
        await Screens.save();
        return Screens;
    }
    async getStatus(status) {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(screen_entity_1.Screen, 'B')
            .where(`status = ${status}`)
            .execute();
        return data;
    }
    async getAllByStatus() {
        let data = await (0, typeorm_1.getManager)()
            .createQueryBuilder()
            .select('*')
            .from(screen_entity_1.Screen, 'B')
            .where(`status = ${lookup_status_enum_1.LookupStatus.ACTIVE}`)
            .execute();
        return data;
    }
    async getAllScreens() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query('SELECT * FROM screen');
        });
        return data;
    }
    async changeStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update screen set status = '${status}' where screen_id = '${id}'`);
            return { data, status: 200, message_En: 'Update rule successfully', message_Ar: 'تم تعديل الخطه بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in Change screen');
        }
    }
};
ScreenRepo = __decorate([
    (0, typeorm_1.EntityRepository)(screen_entity_1.Screen)
], ScreenRepo);
exports.ScreenRepo = ScreenRepo;
//# sourceMappingURL=screen.repo.js.map