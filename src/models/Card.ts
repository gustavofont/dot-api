import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { BaseCardModel } from './BaseCard';
import { UserModel } from './User';

@Entity('card')
export class CardModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BaseCardModel, { nullable: false })
  baseCard: BaseCardModel;

  @ManyToOne(() => UserModel, { nullable: false })
  owner: UserModel;

  @ManyToOne(() => UserModel, { nullable: false })
  pulledBy: UserModel;

  @Column({ type: 'float', nullable: true })
  floatValue: number;
}
