import { Repository } from "typeorm";
import { Faq } from "./faq.entity";
import { faqDto } from "./dto/faq.dto";
export declare class FaqRepository extends Repository<Faq> {
    createNewQuestion(dto: faqDto): Promise<any>;
    getAllQuestions(): Promise<Faq[]>;
    changeQuestionStatus(id: number, status: number): Promise<any>;
    getAllActiveQuestions(): Promise<[]>;
}
