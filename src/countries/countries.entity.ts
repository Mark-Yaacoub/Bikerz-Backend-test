import { City } from 'src/cities/cities.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity('countries')
export class Countries extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'country_id' })
  country_id: number;

  @Column({ length: 100 })
  country_name_en: string;

  @Column({ length: 100 })
  country_name_ar: string;

  @Column('int', { name: 'status' ,default: 1 })
  status: number;

  @OneToMany(() => City, (city) => city.countries)
  cities: City[];

}
