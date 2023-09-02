import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('currency')
export class currency extends BaseEntity {
         
    @PrimaryGeneratedColumn({ type: "int", name: "currency_id" })
    currency_id: number;

    @Column("varchar", { name: "currency_name_en", length: 250 })
    currency_name_en: string;

    @Column("varchar", { name: "currency_name_ar", length: 250 })
    currency_name_ar: string;

    @Column("int", { name: "status" })
    status: number;

    @Column("varchar", { name: "entity_name_en", length: 250 })
    entity_name_en: string;

    @Column("varchar", { name: "entity_name_ar", length: 250 })
    entity_name_ar: string;
}