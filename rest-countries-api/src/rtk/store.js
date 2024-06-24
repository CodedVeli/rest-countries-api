import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./apis/CountryApi";

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
});