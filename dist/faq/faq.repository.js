"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRepository = void 0;
const typeorm_1 = require("typeorm");
const faq_entity_1 = require("./faq.entity");
const lookup_status_enum_1 = require("../lookupmaster/enums/lookup-status-enum");
const common_1 = require("@nestjs/common");
let FaqRepository = class FaqRepository extends typeorm_1.Repository {
    async createNewQuestion(dto) {
        try {
            const { question_ar, question_en, answer_ar, answer_en, useful, created_by, not_useful, status } = dto;
            const newQuestion = new faq_entity_1.Faq();
            newQuestion.question_ar = question_ar;
            newQuestion.question_en = question_en;
            newQuestion.not_useful = 0;
            newQuestion.answer_ar = answer_ar;
            newQuestion.answer_en = answer_en;
            newQuestion.useful = 1;
            newQuestion.status = lookup_status_enum_1.LookupStatus.ACTIVE;
            newQuestion.created_by = created_by;
            await newQuestion.save();
            return {
                status: 200,
                message_en: "Question Created Successfly",
                message_ar: "تم اضافة السؤال بنجاح",
            };
        }
        catch (err) {
        }
    }
    async getAllQuestions() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data = await manager.query(`SELECT question_id, question_ar, question_en, 
          answer_ar, answer_en , useful , not_useful , status,
           created_date, created_by, updated_date, updated_by
           FROM faq 
        `);
        });
        return data;
    }
    ;
    async changeQuestionStatus(id, status) {
        try {
            let data = await (0, typeorm_1.getManager)().query(`update faq set status = '${status}' where question_id = '${id}'`);
            return data;
        }
        catch (err) {
            throw new common_1.NotAcceptableException('error in change status');
        }
    }
    ;
    async getAllActiveQuestions() {
        let data;
        await (0, typeorm_1.getManager)().transaction(async (manager) => {
            data =
                await manager.query(`SELECT question_id, question_ar, question_en, 
            answer_ar, answer_en , useful , not_useful ,
             created_date, created_by, updated_date, updated_by
            FROM faq WHERE status =  ${lookup_status_enum_1.LookupStatus.ACTIVE}
                `);
        });
        return data;
    }
    ;
};
FaqRepository = __decorate([
    (0, typeorm_1.EntityRepository)(faq_entity_1.Faq)
], FaqRepository);
exports.FaqRepository = FaqRepository;
;
//# sourceMappingURL=faq.repository.js.map