import { BaseCardModel } from 'models/BaseCard';
import { CardModel } from 'models/Card';
import { CollectionModel } from 'models/Colletion';
import { RarityModel } from 'models/Rarity';
import { UserModel } from 'models/User';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'dot_api',
    logging: true,
    entities: [UserModel, BaseCardModel, CardModel, CollectionModel, RarityModel]
});