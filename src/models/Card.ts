import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { BaseCardModel } from './BaseCard';
import { UserModel } from './User';

@Entity('card')
export class CardModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BaseCardModel, { nullable: false })
  @JoinColumn({ name: 'baseCard' })
  baseCard: number;

  @ManyToOne(() => UserModel, { nullable: false })
  @JoinColumn({ name: 'owner' })
  owner: number;

  @ManyToOne(() => UserModel, { nullable: false })
  @JoinColumn({ name: 'pulledBy' })
  pulledBy: number;

  @Column({ type: 'float', nullable: true })
  floatValue: number;
}
