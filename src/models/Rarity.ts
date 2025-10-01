import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseCardModel } from './BaseCard';

@Entity('rarities')
export class RarityModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => BaseCardModel, (baseCard) => baseCard.rarity)
  baseCards: BaseCardModel[];
}
