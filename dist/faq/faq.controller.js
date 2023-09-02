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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqController = void 0;
const common_1 = require("@nestjs/common");
const faq_service_1 = require("./faq.service");
const faq_dto_1 = require("./dto/faq.dto");
const shard_dto_1 = require("../shared/shard.dto");
let FaqController = class FaqController {
    constructor(faqServices) {
        this.faqServices = faqServices;
    }
    ;
    createNewQuestion(dto, req) {
        return this.faqServices.createNewQuestion(dto, req);
    }
    ;
    getAllActiveQuestions() {
        return this.faqServices.getAllActiveQuestions();
    }
    ;
    getAllQuestions() {
        return this.faqServices.getAllQuestions();
    }
    ;
    getOneQuestion(id) {
        return this.faqServices.getOneQuestion(id);
    }
    ;
    updateQuestionData(id, dto) {
        return this.faqServices.updateQuestionData(id, dto);
    }
    ;
    async changeStatus(dto, req, id) {
        return await this.faqServices.changeQuestionStatus(id, dto);
    }
    ;
    deleteUser(id, req) {
        return this.faqServices.deleteUser(id, req);
    }
    ;
    async usefulPlus(id) {
        return await this.faqServices.useful(id);
    }
    ;
    async notUseful(id) {
        return await this.faqServices.notUseful(id);
    }
    ;
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faq_dto_1.faqDto, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "createNewQuestion", null);
__decorate([
    (0, common_1.Get)('/getAllActiveQuestions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getAllActiveQuestions", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getAllQuestions", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getOneQuestion", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, faq_dto_1.updateFaqDto]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "updateQuestionData", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shard_dto_1.updateStatusDto, Object, Number]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)('/useful/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "usefulPlus", null);
__decorate([
    (0, common_1.Put)('/notUseful/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "notUseful", null);
FaqController = __decorate([
    (0, common_1.Controller)('faq'),
    __metadata("design:paramtypes", [faq_service_1.FaqService])
], FaqController);
exports.FaqController = FaqController;
;
//# sourceMappingURL=faq.controller.js.map