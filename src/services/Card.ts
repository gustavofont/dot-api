import { AppDataSource } from 'data-source';
import { BaseCardModel } from 'models/BaseCard';
import { CardModel } from 'models/Card';
import { Repository } from 'typeorm';
import { RequestResponse } from 'types';
import apiResponse from 'utils/apiResponse';
import { getRandomCardEfficient } from 'utils/cardUtilities';

class CardService {
    constructor() {
        this.cardRepository = AppDataSource.getRepository(CardModel);
        this.baseCardRepository = AppDataSource.getRepository(BaseCardModel);
    }
    private cardRepository: Repository<CardModel>;
    private baseCardRepository: Repository<BaseCardModel>;

    async genreateCard(collectionId: number) : Promise<RequestResponse> {
        try {
            const cards = await this.baseCardRepository.manager.query(
                `
                select * from base_card bc 
                where bc.collection = 1
                `
            );

            const card = getRandomCardEfficient(cards);

            return apiResponse(200, undefined, undefined, card);
        } catch (error) {
            apiResponse(501, undefined, error);
        }
    }
}

export default new CardService;