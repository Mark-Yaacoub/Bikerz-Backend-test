import { Countries } from 'src/countries/countries.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';

@Entity('cities')
export class City extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'city_id' })
  city_id: number;

  @Column({ length: 100 })
  city_name_en: string;

  @Column({ length: 100 })
  city_name_ar: string;


  @Column('int', { name: 'status' ,default: 1 })
  status: number;

  @Column("int", { name: "country_id" })
  country_id: number;

  @ManyToOne(() => Countries, (countries) => countries.cities)
  @JoinColumn({ name: 'country_id' })
  countries: Countries;
}
