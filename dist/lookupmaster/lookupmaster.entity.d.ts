import { BaseEntity } from "typeorm";
import { LookupStatus } from './enums/lookup-status-enum';
import { LookupType } from './enums/lookup-type-enum';
import { LookupDetails } from "src/LookupDetails/LookupDetails.entity";
export declare class LookupMaster extends BaseEntity {
    lookupId: number;
    insertCode(): void;
    lookupCode: number;
    lookupArName: string;
    lookupEnName: string | null;
    lookupType: LookupType;
    status: LookupStatus;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
    lookupdetail2: LookupDetails[];
}
