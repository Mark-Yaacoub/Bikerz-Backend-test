import { rules } from 'src/rules/rules.entity';
import { users } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class userRules extends BaseEntity {
    userRules_id: number;
    status: number;
    Rules: rules;
    rule_id: number;
    users: users;
    user_id: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
}
