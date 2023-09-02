import { Repository } from 'typeorm';
import { UsersRulesDto } from './dto/userRules.dto';
import { userRules } from './userRule.entity';
export declare class userRulesRepo extends Repository<userRulesRepo> {
    status: any;
    createUserRule(dto: UsersRulesDto): Promise<any>;
    getAllUserRules(): Promise<any>;
    getAll(): Promise<userRules[]>;
    getStatus(status: number): Promise<userRules[]>;
    getAllByStatus(): Promise<userRules[]>;
    changeStatus(id: number, status: number): Promise<any>;
    getUserRule(userId: number): Promise<any>;
}
