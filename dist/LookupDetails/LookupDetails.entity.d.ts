import { LookupMaster } from 'src/lookupmaster/lookupmaster.entity';
import { BaseEntity } from 'typeorm';
export declare class LookupDetails extends BaseEntity {
    lookupDetailId: number;
    rules: any;
    insertCode(): void;
    lookupDetailCode: number | null;
    lookupDetailArName: string;
    lookupDetailEnName: string;
    icon: string;
    color: string;
    status: number;
    lookupId: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
    lookupdetail2: LookupMaster;
}
