import { configureStore } from "@reduxjs/toolkit";
import { mealApi } from "./api/MealApi";

const store = configureStore({
    reducer:{
        [mealApi.reducerPath]: mealApi.reducer,

    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(mealApi.middleware)
})

export default store;