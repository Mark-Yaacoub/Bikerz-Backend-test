import { Repository } from "typeorm";
import { rules } from "./rules.entity";
import { RulesDTO } from "./dto/rules.dto";
import { LookupEnum } from "src/shared/lookup.enum";
export declare class RulesRepo extends Repository<rules> {
    status: LookupEnum;
    createRule(dto: RulesDTO): Promise<rules>;
    getAll(): Promise<rules[]>;
    getStatus(status: number): Promise<rules[]>;
    getAllByStatus(): Promise<rules[]>;
    changeStatus(id: number, status: number): Promise<any>;
}
