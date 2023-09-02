import { Repository } from 'typeorm';
import { ScreenRules } from './Screen_rules.entity';
import { ScreenRulesDto } from './dto/ScreenRules.dto';
export declare class ScreenRulesRepo extends Repository<ScreenRules> {
    status: any;
    createScreenRules(dto: ScreenRulesDto): Promise<any>;
    getAllScreenRule(): Promise<any>;
    getAll(): Promise<ScreenRules[]>;
    getStatus(status: number): Promise<ScreenRules[]>;
    getAllByStatus(): Promise<ScreenRules[]>;
    changeStatus(id: number, status: number): Promise<any>;
}
