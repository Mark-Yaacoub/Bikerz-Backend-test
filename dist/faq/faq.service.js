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
exports.FaqService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const faq_repository_1 = require("./faq.repository");
let FaqService = class FaqService {
    constructor(_faqRepo) {
        this._faqRepo = _faqRepo;
    }
    async createNewQuestion(dto, req) {
        return await this._faqRepo.createNewQuestion(dto);
    }
    async updateQuestionData(id, updateQuestionDto) {
        try {
            const questionData = await this._faqRepo.findOne({
                where: { question_id: id },
            });
            const updated = Object.assign(questionData, updateQuestionDto);
            let updateQuestionData = await this._faqRepo.save(updated);
            return {
                status: 200,
                updateQuestionData,
                message_en: 'Updated Successfly',
                message_ar: 'تم التعديل بنجاح',
            };
        }
        catch (err) {
            return { message: 'An error occured' };
        }
    }
    async getAllQuestions() {
        return await this._faqRepo.getAllQuestions();
    }
    async getAllActiveQuestions() {
        return await this._faqRepo.getAllActiveQuestions();
    }
    async getOneQuestion(id) {
        const question = await this._faqRepo.findOne(id);
        if (!question) {
            throw new common_1.NotFoundException(`This Question  ${id} is not found`);
        }
        return question;
    }
    async changeQuestionStatus(id, dto) {
        try {
            let updatequestion = await this._faqRepo.changeQuestionStatus(id, dto.status);
            return {
                status: 200,
                message_en: 'Updated Successfly',
                message_ar: 'تم التعديل بنجاح',
            };
        }
        catch (err) {
            throw new common_1.NotAcceptableException('An error occurred, please try again');
        }
    }
    async deleteUser(id, req) {
        let deleted;
        try {
            let user = await this._faqRepo.findOne(id);
            deleted = await this._faqRepo.delete(id);
            return {
                status: 200,
                message_en: 'Question sucessfully deleted',
                message_ar: 'تم مسح السؤال بنجاح',
            };
        }
        catch (err) {
            return {
                status: 406,
                error_en: 'You can not delete this question',
                error_ar: 'لا يمكنك حذف هذا السؤال',
            };
        }
    }
    async useful(id) {
        try {
            const faq = await this._faqRepo.findOne(id);
            faq.useful += 1;
            const updatedFaq = await this._faqRepo.save(faq);
            return { status: 200, faq: updatedFaq };
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    async notUseful(id) {
        try {
            const faq = await this._faqRepo.findOne(id);
            faq.not_useful += 1;
            const updatedFaq = await this._faqRepo.save(faq);
            return { status: 200, faq: updatedFaq };
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
};
FaqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faq_repository_1.FaqRepository)),
    __metadata("design:paramtypes", [faq_repository_1.FaqRepository])
], FaqService);
exports.FaqService = FaqService;
//# sourceMappingURL=faq.service.js.map