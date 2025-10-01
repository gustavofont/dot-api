import { BaseCardModel } from 'models/BaseCard';

export function randomBetween0And1(): number {
  return parseFloat(Math.random().toFixed(10));
}

export function getRandomCardEfficient(cards: BaseCardModel[]): BaseCardModel | null {
  if (!cards.length) return null;

  // Definir pesos por raridade
  const rarityWeights: Record<number, number> = {
    1: 50,  // Common
    2: 25,  // Uncommon
    3: 15,  // Rare
    4: 7,   // Epic
    5: 3    // Legendary
  };

  // Calcular o total dos pesos
  const totalWeight = cards.reduce((sum, card) => {
  const rarity: number = Number(card.rarity);           // raridade da carta
  const weight = rarityWeights[rarity] || 1;   // peso baseado na raridade
  return sum + weight;                          // acumula ao total
}, 0);

  // Escolher um número aleatório entre 0 e totalWeight
  let random = Math.random() * totalWeight;

  // Iterar e selecionar a carta correspondente
  for (const card of cards) {
    const rarity: number = Number(card.rarity);  
    const weight = rarityWeights[rarity];
    if (random < weight) {
      return card;
    }
    random -= weight;
  }
}