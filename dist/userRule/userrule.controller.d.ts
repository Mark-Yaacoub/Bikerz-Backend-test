import { UserRuleService } from './userRule.service';
import { UsersRulesDto } from './dto/userRules.dto';
import { userRules } from './userRule.entity';
import { updateStatusDto } from 'src/shared/shard.dto';
export declare class UserRuleController {
    private UserRuleService;
    constructor(UserRuleService: UserRuleService);
    getRulesByStatus(status: number): Promise<userRules[]>;
    getAllActiveRules(): Promise<userRules[]>;
    getOneRule(id: number): Promise<userRules>;
    getAllRules(req: any): Promise<userRules[]>;
    createUserRule(dto: UsersRulesDto): Promise<userRules>;
    updateUsersRule(id: number, dto: UsersRulesDto): Promise<any>;
    delete(id: number): Promise<void>;
    changeStatus(dto: updateStatusDto, req: any, id: number): Promise<any>;
}
