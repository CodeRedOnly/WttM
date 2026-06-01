import { CardData } from "./Card";

export type suit = "robot" | "energy" | "plant" | "water" | "astronaut" | "schedule";

const suits : suit[] = ["robot", "energy", "plant", "water", "astronaut", "schedule"];

const values = [
  [1, 1, 0, 0, 2, 1, 1, 2, 1, 1, 2, 0, 0, 1, 1],
  [1, 0, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
];

export function createDeck(): CardData[] {
  let cards = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      for (let k = 0; k < values[i][j]; k++) {
        cards.push({ suit: suits[i], value: j + 1 });
      }
    }
  }

  return cards;
}

export function shuffleDeck (deck: CardData[]) : CardData[] {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }

  return newDeck;
}

export function drawCards(deck: CardData[], count: number) : CardData[][] {
  const drawn = deck.slice(0, count);
  const newDeck = deck.slice(count);
  return [ drawn, newDeck ];
}
