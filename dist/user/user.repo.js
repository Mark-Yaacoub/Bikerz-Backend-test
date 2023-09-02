"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const lookup_enum_1 = require("../shared/lookup.enum");
const user_entity_1 = require("./user.entity");
let UserRepo = class UserRepo extends typeorm_1.Repository {
    async createUserForOrganization(dto) {
        const { email, password, phoneNumber, created_by } = dto;
        try {
            const user = new user_entity_1.users();
            user.salt = await bcrypt.genSalt();
            user.password = await this.hashPassword(password, user.salt);
            user.email = email;
            user.imageUrl = 'default-user.jpeg';
            user.created_by = created_by;
            user.user_type = lookup_enum_1.LookupEnum.owner_organization;
            user.userRole = lookup_enum_1.LookupEnum.organization_owner;
            user.status = lookup_enum_1.LookupEnum.Enabled;
            user.verified = 0;
            user.phoneNumber = phoneNumber;
            await user.save();
            return user;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                const duplicateField = error.sqlMessage.match(/'([^']+)'/)[1];
                const errorMessageEn = `Duplicate entry for field: ${duplicateField}`;
                const errorMessageAr = `هذه البيانات موجوده بالفعل: ${duplicateField}`;
                return {
                    status: 400,
                    errorEN: errorMessageEn,
                    errorAr: errorMessageAr,
                };
            }
            throw error;
        }
    }
    async createUserForRestaurant(dto) {
        const { email, password, organization_id, phoneNumber, created_by } = dto;
        try {
            const user = new user_entity_1.users();
            user.salt = await bcrypt.genSalt();
            user.password = await this.hashPassword(password, user.salt);
            user.email = email;
            user.imageUrl = 'default-user.jpeg';
            user.created_by = created_by;
            user.user_type = lookup_enum_1.LookupEnum.user_organization;
            user.userRole = lookup_enum_1.LookupEnum.Restaurant_Manager;
            user.status = lookup_enum_1.LookupEnum.Enabled;
            user.verified = 0;
            user.phoneNumber = phoneNumber;
            await user.save();
            return user;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                const duplicateField = error.sqlMessage.match(/'([^']+)'/)[1];
                const errorMessageEn = `Duplicate entry for field: ${duplicateField}`;
                const errorMessageAr = `هذه البيانات موجوده بالفعل: ${duplicateField}`;
                return {
                    status: 400,
                    errorEN: errorMessageEn,
                    errorAr: errorMessageAr,
                };
            }
            throw error;
        }
    }
    async hashPassword(password, salt) {
        return await bcrypt.hash(password, salt);
    }
    async userData(email) {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`
        SELECT * FROM "User" WHERE email = $1
      `, [email]);
        });
        return data;
    }
};
UserRepo = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.users)
], UserRepo);
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repo.js.map