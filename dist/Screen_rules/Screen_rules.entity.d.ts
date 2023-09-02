import { rules } from 'src/rules/rules.entity';
import { Screen } from 'src/screens/screen.entity';
import { BaseEntity } from 'typeorm';
export declare class ScreenRules extends BaseEntity {
    screen_rule_id: number;
    status: number;
    Rules: rules;
    rule_id: number;
    screen: Screen;
    screen_id: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
}
