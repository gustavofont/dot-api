import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CollectionModel } from './Colletion';
import { RarityModel } from './Rarity';

@Entity('base_card')
export class BaseCardModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => CollectionModel, (collection) => collection.baseCards, { nullable: false })
  @JoinColumn({ name: 'collection' })
  collection: CollectionModel;

  @ManyToOne(() => RarityModel, (rarity) => rarity.baseCards, { nullable: false })
  @JoinColumn({ name: 'rarity' })
  rarity: number;
}
