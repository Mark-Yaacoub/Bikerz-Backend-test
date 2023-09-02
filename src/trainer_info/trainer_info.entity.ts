import { users } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Trainer_Info')
export class TrainerInfo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'trainer_info_id' })
  trainer_info_id: number;

  @Column({ name: 'specialization' })
  specialization: string;

  @Column({ name: 'experience' })
  experience: number;

  @Column({ name: 'age' })
  age: number;

  @Column('int', { name: 'user_id' })
  user_id: number;
  @OneToOne(() => users)
  @JoinColumn({ name: 'user_id' })
  user: users;
}
