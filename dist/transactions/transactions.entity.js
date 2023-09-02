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
exports.transactions = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let transactions = class transactions extends typeorm_1.BaseEntity {
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], transactions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], transactions.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], transactions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tap_charge_id', nullable: true }),
    __metadata("design:type", String)
], transactions.prototype, "tapChargeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tap_initiate_id', nullable: true }),
    __metadata("design:type", String)
], transactions.prototype, "tapInitiateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tap_capture_id', nullable: true }),
    __metadata("design:type", String)
], transactions.prototype, "tapCaptureId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tap_redirect_url', nullable: true }),
    __metadata("design:type", String)
], transactions.prototype, "tapRedirectUrl", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], transactions.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], transactions.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], transactions.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], transactions.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], transactions.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], transactions.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.users, (users) => users.userTransactions),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.users)
], transactions.prototype, "user", void 0);
transactions = __decorate([
    (0, typeorm_1.Entity)('transactions')
], transactions);
exports.transactions = transactions;
//# sourceMappingURL=transactions.entity.js.map