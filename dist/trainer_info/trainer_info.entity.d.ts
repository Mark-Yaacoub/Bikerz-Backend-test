import { users } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class TrainerInfo extends BaseEntity {
    trainer_info_id: number;
    specialization: string;
    experience: number;
    age: number;
    user_id: number;
    user: users;
}
