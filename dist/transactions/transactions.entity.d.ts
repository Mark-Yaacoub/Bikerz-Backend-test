import { users } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class transactions extends BaseEntity {
    id: number;
    amount: number;
    status: number;
    tapChargeId: string;
    tapInitiateId: string;
    tapCaptureId: string;
    tapRedirectUrl: string;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
    user: users;
}
