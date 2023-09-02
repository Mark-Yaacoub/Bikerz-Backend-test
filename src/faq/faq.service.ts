import {
     Injectable,
     NotAcceptableException,
     NotFoundException,
   } from '@nestjs/common';
   import { InjectRepository } from '@nestjs/typeorm';
   import { Faq } from './faq.entity';
   import { faqDto } from './dto/faq.dto';
import { FaqRepository } from './faq.repository';
   
   @Injectable()
   export class FaqService {
     constructor(
       @InjectRepository(FaqRepository) private _faqRepo: FaqRepository,
     ) {}
   
     async createNewQuestion(dto: faqDto, req): Promise<Faq> {
       return await this._faqRepo.createNewQuestion(dto);
     }
   
     async updateQuestionData(id: number, updateQuestionDto: any): Promise<any> {
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
       } catch (err) {
         return { message: 'An error occured' };
       }
     }
   
     async getAllQuestions(): Promise<Faq[]> {
       return await this._faqRepo.getAllQuestions();
     }
   
     async getAllActiveQuestions(): Promise<Faq[]> {
       return await this._faqRepo.getAllActiveQuestions();
     }
   
     async getOneQuestion(id: number): Promise<any> {
       const question = await this._faqRepo.findOne(id);
   
       if (!question) {
         throw new NotFoundException(`This Question  ${id} is not found`);
       }
       return question;
     }
   
     async changeQuestionStatus(id: number, dto): Promise<any> {
       try {
         let updatequestion = await this._faqRepo.changeQuestionStatus(
           id,
           dto.status,
         );
         return {
           status: 200,
           message_en: 'Updated Successfly',
           message_ar: 'تم التعديل بنجاح',
         };
       } catch (err) {
         throw new NotAcceptableException('An error occurred, please try again');
       }
     }
   
     async deleteUser(id: number, req): Promise<any> {
       let deleted;
       try {
         let user = await this._faqRepo.findOne(id);
         deleted = await this._faqRepo.delete(id);
         return {
           status: 200,
           message_en: 'Question sucessfully deleted',
           message_ar: 'تم مسح السؤال بنجاح',
         };
       } catch (err) {
         return {
           status: 406,
           error_en: 'You can not delete this question',
           error_ar: 'لا يمكنك حذف هذا السؤال',
         };
       }
     }
   
     async useful(id: number): Promise<any> {
       try {
         const faq = await this._faqRepo.findOne(id);
   
         faq.useful += 1;
   
         const updatedFaq = await this._faqRepo.save(faq);
   
         return { status: 200, faq: updatedFaq };
       } catch (err) {
         console.error(err);
         throw err;
       }
     }
   
     async notUseful(id: number): Promise<any> {
       try {
         const faq = await this._faqRepo.findOne(id);
   
         faq.not_useful += 1;
   
         const updatedFaq = await this._faqRepo.save(faq);
   
         return { status: 200, faq: updatedFaq };
       } catch (err) {
         console.error(err);
         throw err;
       }
     }
   }
   