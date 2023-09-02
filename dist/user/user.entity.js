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
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const transactions_entity_1 = require("../transactions/transactions.entity");
const review_entity_1 = require("../review/review.entity");
const trainer_info_entity_1 = require("../trainer_info/trainer_info.entity");
let users = class users extends typeorm_1.BaseEntity {
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
    async compareUserPassword(password) {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'user_id' }),
    __metadata("design:type", Number)
], users.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 50, unique: true }),
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'image_url', length: 1000, nullable: true }),
    __metadata("design:type", String)
], users.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'verified', default: 0 }),
    __metadata("design:type", Number)
], users.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'salt', length: 500 }),
    __metadata("design:type", String)
], users.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], users.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_type' }),
    __metadata("design:type", Number)
], users.prototype, "user_type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], users.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'otp' }),
    __metadata("design:type", Number)
], users.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], users.prototype, "userRole", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], users.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], users.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], users.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], users.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], users.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], users.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactions_entity_1.transactions, (transaction) => transaction.user),
    __metadata("design:type", Array)
], users.prototype, "userTransactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Reviews, (review) => review.user),
    __metadata("design:type", Array)
], users.prototype, "userReviews", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => trainer_info_entity_1.TrainerInfo, (trainerInfo) => trainerInfo.user),
    __metadata("design:type", trainer_info_entity_1.TrainerInfo)
], users.prototype, "trainerInfo", void 0);
users = __decorate([
    (0, typeorm_1.Entity)('users')
], users);
exports.users = users;
//# sourceMappingURL=user.entity.js.map