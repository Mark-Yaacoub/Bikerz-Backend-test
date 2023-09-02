export declare class faqDto {
    question_ar: string;
    question_en: string;
    answer_ar: string;
    answer_en: string;
    useful: number;
    not_useful: number;
    status: number;
    created_by: number;
    created_date: Date;
    updated_date: Date;
    updated_by: number;
}
export declare class updateFaqDto {
    question_ar: string;
    question_en: string;
    answer_ar: string;
    answer_en: string;
    useful: number;
    not_useful: number;
    status: number;
    created_by: number;
    created_date: Date;
    updated_date: Date;
    updated_by: number;
}
export declare class updateQuestionStatusDto {
    status: number;
}
