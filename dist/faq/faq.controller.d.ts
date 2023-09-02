import { FaqService } from './faq.service';
import { Faq } from './faq.entity';
import { faqDto, updateFaqDto } from './dto/faq.dto';
import { updateStatusDto } from 'src/shared/shard.dto';
export declare class FaqController {
    private faqServices;
    constructor(faqServices: FaqService);
    createNewQuestion(dto: faqDto, req: any): Promise<Faq>;
    getAllActiveQuestions(): Promise<Faq[]>;
    getAllQuestions(): Promise<Faq[]>;
    getOneQuestion(id: number): Promise<Faq>;
    updateQuestionData(id: number, dto: updateFaqDto): Promise<any>;
    changeStatus(dto: updateStatusDto, req: any, id: number): Promise<any>;
    deleteUser(id: number, req: any): Promise<void>;
    usefulPlus(id: number): Promise<any>;
    notUseful(id: number): Promise<any>;
}
