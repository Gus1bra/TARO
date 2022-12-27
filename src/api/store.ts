import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slices/cardsSlice";
import aboutReducer from "./slices/aboutSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
