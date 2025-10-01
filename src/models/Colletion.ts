import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseCardModel } from './BaseCard';

@Entity('collection')
export class CollectionModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => BaseCardModel, (baseCard) => baseCard.collection)
  baseCards: BaseCardModel[];
}
