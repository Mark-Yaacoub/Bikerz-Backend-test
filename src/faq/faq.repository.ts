import { EntityRepository, Repository, getManager } from "typeorm";
import { Faq } from "./faq.entity";
import { faqDto } from "./dto/faq.dto";
import { LookupStatus } from "src/lookupmaster/enums/lookup-status-enum";
import { NotAcceptableException } from "@nestjs/common";

@EntityRepository(Faq)
export class FaqRepository extends Repository<Faq>{

    async createNewQuestion(dto: faqDto): Promise<any> {
        try {
          const {
            question_ar,
            question_en,
            answer_ar,
            answer_en,
            useful,
            created_by,
            not_useful,
            status
          } = dto;
    
          const newQuestion = new Faq();
    
          newQuestion.question_ar = question_ar;
          newQuestion.question_en = question_en;
          newQuestion.not_useful = 0;
          newQuestion.answer_ar = answer_ar;
          newQuestion.answer_en = answer_en;
          newQuestion.useful = 1;
          newQuestion.status = LookupStatus.ACTIVE
          newQuestion.created_by = created_by;    
          await newQuestion.save();
          return {
            status: 200,
             message_en: "Question Created Successfly",
             message_ar: "تم اضافة السؤال بنجاح",
          };
        } catch (err) {
          // console.log(err);
        }
      }

    async getAllQuestions(): Promise<Faq[]> {
        let data;
        await getManager().transaction(async (manager) => {
          data = await manager.query(`SELECT question_id, question_ar, question_en, 
          answer_ar, answer_en , useful , not_useful , status,
           created_date, created_by, updated_date, updated_by
           FROM faq 
        `);
        });
        return data;
      };

     async changeQuestionStatus(id: number, status: number): Promise<any> {
        try {
          let data = await getManager().query(
            `update faq set status = '${status}' where question_id = '${id}'`,
          );
          return data;
        } catch (err) {
          throw new NotAcceptableException('error in change status');
        }
      };

      async getAllActiveQuestions(): Promise<[]> {
        let data;
        await getManager().transaction(async (manager) => {
          data =
            await manager.query(`SELECT question_id, question_ar, question_en, 
            answer_ar, answer_en , useful , not_useful ,
             created_date, created_by, updated_date, updated_by
            FROM faq WHERE status =  ${LookupStatus.ACTIVE}
                `);
        });
        return data;
      };
};
