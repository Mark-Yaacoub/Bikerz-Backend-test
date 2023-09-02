import { users } from 'src/user/user.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('reviews')
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'review_id' })
  review_id: number;

  @Column('int', { name: 'status' })
  status: number;

  @Column('varchar', { name: 'description', length: 250 })
  description: string;

  @Column('int', { name: 'rate' })
  rate: number;

  @Column('int', { name: 'user_id' })
  user_id: number;

  @ManyToOne(() => users, (user) => user.userReviews)
  @JoinColumn({ name: 'user_id' })
  user: users;
}
