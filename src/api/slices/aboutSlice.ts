import { aboutData } from "./../data/about";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IAboutState {
  fromAuthor: IAboutContent;
  aboutTaro: IAboutContent;
  spreads: IAboutContent;
  aboutAuthor: IAboutContent;
}

export interface IAboutContent {
  title: string;
  content: string[];
}

const initialState: IAboutState = {
  fromAuthor: {
    title: "От автора",
    content: aboutData.fromAuthor,
  },
  aboutTaro: {
    title: "О системе Таро",
    content: aboutData.aboutTaro,
  },
  spreads: {
    title: "Расклады",
    content: aboutData.spreads,
  },
  aboutAuthor: {
    title: "Об авторе",
    content: aboutData.aboutAuthor,
  },
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export const selectAbout = (state: RootState) => state.about;

export default aboutSlice.reducer;
