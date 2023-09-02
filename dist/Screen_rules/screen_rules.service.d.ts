import { ScreenRulesRepo } from './Screen_rules.repo';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';
export declare class Screen_rulesService {
    private ScreenRulesRepo;
    constructor(ScreenRulesRepo: ScreenRulesRepo);
    createScreenRules(dto: ScreenRulesDto): Promise<ScreenRules>;
    getOneScreenRules(id: number): Promise<any>;
    updateScreenRules(id: number, dto: ScreenRulesDto): Promise<any>;
    delete(id: number): Promise<any>;
    getStatus(status: number): Promise<ScreenRules[]>;
    getAllActiveRules(): Promise<ScreenRules[]>;
    getAllSCreenRules(req: any): Promise<ScreenRules[]>;
    changeStatus(id: number, updateStatusDto: any): Promise<any>;
}
