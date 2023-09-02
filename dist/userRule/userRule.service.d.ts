import { userRulesRepo } from './userRule.repo';
import { UsersRulesDto } from './dto/userRules.dto';
import { userRules } from './userRule.entity';
export declare class UserRuleService {
    private userRulesRepo;
    constructor(userRulesRepo: userRulesRepo);
    createUserRule(dto: UsersRulesDto): Promise<userRules>;
    getOneUserRules(id: number): Promise<any>;
    updateUsersRule(id: number, dto: UsersRulesDto): Promise<any>;
    delete(id: number): Promise<any>;
    getStatus(status: number): Promise<userRules[]>;
    getAllActiveRules(): Promise<userRules[]>;
    getAllRules(req: any): Promise<userRules[]>;
    changeStatus(id: number, updateStatusDto: any): Promise<any>;
}
