import { Faq } from './faq.entity';
import { faqDto } from './dto/faq.dto';
import { FaqRepository } from './faq.repository';
export declare class FaqService {
    private _faqRepo;
    constructor(_faqRepo: FaqRepository);
    createNewQuestion(dto: faqDto, req: any): Promise<Faq>;
    updateQuestionData(id: number, updateQuestionDto: any): Promise<any>;
    getAllQuestions(): Promise<Faq[]>;
    getAllActiveQuestions(): Promise<Faq[]>;
    getOneQuestion(id: number): Promise<any>;
    changeQuestionStatus(id: number, dto: any): Promise<any>;
    deleteUser(id: number, req: any): Promise<any>;
    useful(id: number): Promise<any>;
    notUseful(id: number): Promise<any>;
}
