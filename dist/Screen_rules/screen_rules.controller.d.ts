import { Screen_rulesService } from './screen_rules.service';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';
import { updateStatusDto } from 'src/shared/shard.dto';
export declare class Screen_rulesController {
    private Screen_rulesService;
    constructor(Screen_rulesService: Screen_rulesService);
    getRulesByStatus(status: number): Promise<ScreenRules[]>;
    getAllActiveRules(): Promise<ScreenRules[]>;
    getOneRule(id: number): Promise<ScreenRules>;
    getAllRules(req: any): Promise<ScreenRules[]>;
    createUserRule(dto: ScreenRulesDto): Promise<ScreenRules>;
    updateUsersRule(id: number, dto: ScreenRulesDto): Promise<any>;
    delete(id: number): Promise<void>;
    changeStatus(dto: updateStatusDto, req: any, id: number): Promise<any>;
}
