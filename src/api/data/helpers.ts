import { ICardForShow } from "../../components/cardForShow/cardForShow";
import { ICard } from "../slices/cardsSlice";

const randomIndexFromDiapason = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomIndexForSpreads = (
  spreads: ICard[],
  source: ICard[]
): ICard => {
  let spreadsIndexes: number[] = [];
  spreads.forEach((el) => spreadsIndexes.push(el.id));
  let newSource: ICard[] = source.filter(
    (el) => !spreadsIndexes.includes(el.id) && el.title !== ""
  );
  let result: ICard =
    newSource[randomIndexFromDiapason(0, newSource.length - 1)];
  return result;
};

export interface ISelectedCards {
  iterator: number;
  cards: ICard[];
}

export const fillCards = (
  cardsArray: ISelectedCards,
  setItemsArray: React.Dispatch<React.SetStateAction<ICardForShow[]>>
) => {
  const tempCard: ICardForShow = {
    title: cardsArray.cards[cardsArray.iterator].title,
    description: cardsArray.cards[cardsArray.iterator].description,
  };
  switch (cardsArray.iterator) {
    case 0:
      tempCard.value = cardsArray.cards[cardsArray.iterator].cardAdvice;
      setItemsArray((prev) => [...prev, tempCard]);
      break;
    case 1:
      tempCard.value = cardsArray.cards[cardsArray.iterator].values[0];
      setItemsArray((prev) => [...prev, tempCard]);
      break;
    case 2:
      tempCard.value = cardsArray.cards[cardsArray.iterator].values[0];
      setItemsArray((prev) => [...prev, tempCard]);
      break;
    case 3:
      tempCard.value = cardsArray.cards[cardsArray.iterator].warning;
      setItemsArray((prev) => [...prev, tempCard]);
      break;
    case 4:
      tempCard.value = cardsArray.cards[cardsArray.iterator].flippedCard;
      setItemsArray((prev) => [...prev, tempCard]);
      break;
    case 5:
      tempCard.value = cardsArray.cards[cardsArray.iterator].flippedCard;
      setItemsArray((prev) => [...prev, tempCard]);
      break;
  }
};
