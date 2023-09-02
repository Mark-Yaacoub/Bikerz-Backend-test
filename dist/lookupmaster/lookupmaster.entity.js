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
exports.LookupMaster = void 0;
const typeorm_1 = require("typeorm");
const lookup_status_enum_1 = require("./enums/lookup-status-enum");
const lookup_type_enum_1 = require("./enums/lookup-type-enum");
const LookupDetails_entity_1 = require("../LookupDetails/LookupDetails.entity");
let LookupMaster = class LookupMaster extends typeorm_1.BaseEntity {
    insertCode() {
        this.lookupCode = this.lookupId;
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
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "lookup_id" }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "lookupId", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupMaster.prototype, "insertCode", null);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lookup_code", nullable: true }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "lookupCode", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "lookup_ar_name", length: 250 }),
    __metadata("design:type", String)
], LookupMaster.prototype, "lookupArName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "lookup_en_name", nullable: true, length: 250 }),
    __metadata("design:type", String)
], LookupMaster.prototype, "lookupEnName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lookup_type" }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "lookupType", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "status" }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupMaster.prototype, "insertDates", null);
__decorate([
    (0, typeorm_1.Column)({ name: "created_date", nullable: true, default: null, type: "timestamp" }),
    __metadata("design:type", Date)
], LookupMaster.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "created_by" }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LookupMaster.prototype, "updateDates", null);
__decorate([
    (0, typeorm_1.Column)({ name: "updated_date", nullable: true, default: null, type: "timestamp" }),
    __metadata("design:type", Date)
], LookupMaster.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "updated_by", nullable: true }),
    __metadata("design:type", Number)
], LookupMaster.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LookupDetails_entity_1.LookupDetails, (LookupDetails) => LookupDetails.lookupdetail2),
    __metadata("design:type", Array)
], LookupMaster.prototype, "lookupdetail2", void 0);
LookupMaster = __decorate([
    (0, typeorm_1.Index)(["status"], { unique: false }),
    (0, typeorm_1.Index)(["lookupCode"], { unique: false }),
    (0, typeorm_1.Index)(["status", "lookupCode"], { unique: false }),
    (0, typeorm_1.Entity)("lookup_master")
], LookupMaster);
exports.LookupMaster = LookupMaster;
//# sourceMappingURL=lookupmaster.entity.js.map