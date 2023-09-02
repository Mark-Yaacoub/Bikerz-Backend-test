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
exports.LookupDetails = void 0;
const lookupmaster_entity_1 = require("../lookupmaster/lookupmaster.entity");
const typeorm_1 = require("typeorm");
let LookupDetails = class LookupDetails extends typeorm_1.BaseEntity {
    insertCode() {
        this.lookupDetailCode = this.lookupDetailId;
        this.save();
    }
    insertDates() {
        this.createdDate = new Date();
    }
    updateDates() {
        this.updatedDate = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'lookup_detail_id' }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "lookupDetailId", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupDetails.prototype, "insertCode", null);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'lookup_detail_code', nullable: true }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "lookupDetailCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lookup_detail_ar_name', length: 250 }),
    __metadata("design:type", String)
], LookupDetails.prototype, "lookupDetailArName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lookup_detail_en_name', length: 250 }),
    __metadata("design:type", String)
], LookupDetails.prototype, "lookupDetailEnName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'icon', length: 250, nullable: true }),
    __metadata("design:type", String)
], LookupDetails.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'color', length: 250, nullable: true }),
    __metadata("design:type", String)
], LookupDetails.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'lookup_id' }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "lookupId", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupDetails.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], LookupDetails.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'created_by' }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupDetails.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_date',
        nullable: true,
        default: null,
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], LookupDetails.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], LookupDetails.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lookupmaster_entity_1.LookupMaster, (LookupMaster) => LookupMaster.lookupdetail2, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'lookup_id', referencedColumnName: 'lookupId' }]),
    __metadata("design:type", lookupmaster_entity_1.LookupMaster)
], LookupDetails.prototype, "lookupdetail2", void 0);
LookupDetails = __decorate([
    (0, typeorm_1.Index)(['lookupId', 'lookupDetailEnName'], { unique: true }),
    (0, typeorm_1.Index)(['lookupId', 'lookupDetailArName'], { unique: true }),
    (0, typeorm_1.Index)(['lookupId', 'lookupDetailEnName', 'status'], { unique: true }),
    (0, typeorm_1.Index)(['lookupId', 'lookupDetailArName', 'status'], { unique: true }),
    (0, typeorm_1.Entity)('lookup_details')
], LookupDetails);
exports.LookupDetails = LookupDetails;
//# sourceMappingURL=LookupDetails.entity.js.map