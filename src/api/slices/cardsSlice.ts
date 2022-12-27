import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { majorArcanesData } from "../data/majorArcanes";
import { minorArcanesData } from "../data/minorArcanes";
import { oraclesData } from "../data/oracles";

export interface ICardsState {
  majorArcanes: ICardsGroup;
  minorArcanes: ICardsGroup;
  oracles: ICardsGroup;
}

interface ICardsGroup {
  title: string;
  cards: ICard[];
}

export interface ICard {
  id: number;
  title: string;
  description: string;
  values: string[];
  cardAdvice?: string;
  flippedCard?: string;
  warning?: string;
  answer?: string;
}

const initialState: ICardsState = {
  majorArcanes: {
    title: "Старшие Арканы",
    cards: majorArcanesData,
  },
  minorArcanes: {
    title: "Младшие Арканы",
    cards: minorArcanesData,
  },
  oracles: {
    title: "Оракулы",
    cards: oraclesData,
  },
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectCards = (state: RootState) => state.cards;

export default cardsSlice.reducer;
