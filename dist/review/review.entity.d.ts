import { users } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Reviews extends BaseEntity {
    review_id: number;
    status: number;
    description: string;
    rate: number;
    user_id: number;
    user: users;
}
