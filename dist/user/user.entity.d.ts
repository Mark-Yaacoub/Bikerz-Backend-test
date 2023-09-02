import { BaseEntity } from 'typeorm';
import { transactions } from 'src/transactions/transactions.entity';
import { Reviews } from 'src/review/review.entity';
import { TrainerInfo } from 'src/trainer_info/trainer_info.entity';
export declare class users extends BaseEntity {
    user_id: number;
    email: string;
    password: string;
    imageUrl: string;
    verified: number;
    salt: string;
    phoneNumber: string;
    user_type: number;
    status: number;
    otp: number;
    userRole: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
    userTransactions: transactions[];
    userReviews: Reviews[];
    trainerInfo: TrainerInfo;
    compareUserPassword(password: string): Promise<boolean>;
}
