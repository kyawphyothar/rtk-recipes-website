import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.themealdb.com/api/json/v1/1/`,
  }),
  tagTypes: ["mealApi"],
  endpoints: (builder) => ({
    getMealCategory: builder.query({
      query: () => `/categories.php`,
      providesTags: ["mealApi"],
    }),
    getRandomSingleMeal: builder.query({
      query: () => `/random.php`,
      providesTags: ["mealApi"],
    }),
    getSeaFood: builder.query({
      query: () => `/filter.php?c=Seafood`,
      providesTags: ["mealApi"],
    }),
    getChicken: builder.query({
      query: () => `/filter.php?c=Chicken`,
      providesTags: ["mealApi"],
    }),
    getBeef:builder.query({
      query:()=>`/filter.php?c=Beef`,
      providesTags:["mealApi"]
    }),
    getDessert:builder.query({
      query:()=>`/filter.php?c=Dessert`,
      providesTags:["mealApi"]
    }),
    getLamb:builder.query({
      query:()=>`/filter.php?c=Lamb`,
      providesTags:["mealApi"]
    }),
    getMiscellaneous:builder.query({
      query:()=>`/filter.php?c=Miscellaneous`,
      providesTags:["mealApi"]
    }),
    getPasta:builder.query({
      query:()=>`/filter.php?c=Pasta`,
      providesTags:["mealApi"]
    }),
    getPork:builder.query({
      query:()=>`/filter.php?c=Pork`,
      providesTags:["mealApi"]
    }),
    getSide:builder.query({
      query:()=>`/filter.php?c=Side`,
      providesTags:["mealApi"]
    }),
    getStarter:builder.query({
      query:()=>`/filter.php?c=Starter`,
      providesTags:["mealApi"]
    }),
    getVegan:builder.query({
      query:()=>`/filter.php?c=Vegan`,
      providesTags:["mealApi"]
    }),
    getVegetarian:builder.query({
      query:()=>`/filter.php?c=Vegetarian`,
      providesTags:["mealApi"]
    }), 
    getBreakfast:builder.query({
      query:()=>`/filter.php?c=Breakfast`,
      providesTags:["mealApi"]
    }),
    getGoat:builder.query({
      query:()=>`/filter.php?c=Goat`,
      providesTags:["mealApi"]
    }),
    getDetail:builder.query({
      query:(idMeal)=>`/lookup.php?i=${idMeal}`,
      providesTags:["mealApi"]
    }),
    getSearchedMeal:builder.query({
      query:(searchValue)=>`/search.php?s=${searchValue}`,
      providesTags:["mealApi"]
    }),
    filterMealByCategory:builder.query({
      query:(strCategory)=>`/filter.php?c=${strCategory}`,
      providesTags:['mealApi']
    })
  }),
});

export const {
  useGetMealCategoryQuery,
  useGetRandomSingleMealQuery,
  useGetSeaFoodQuery,
  useGetChickenQuery,
  useGetBeefQuery,
  useGetDessertQuery,
  useGetLambQuery,
  useGetMiscellaneousQuery,
  useGetPastaQuery,
  useGetPorkQuery,
  useGetSideQuery,
  useGetBreakfastQuery,
  useGetStarterQuery,
  useGetVegetarianQuery,
  useGetVeganQuery,
  useGetGoatQuery,
  useGetDetailQuery,
  useGetSearchedMealQuery,
  useFilterMealByCategoryQuery
} = mealApi;
