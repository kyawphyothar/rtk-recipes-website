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
    getAllMeals: builder.query({
      query: (name) => `/filter.php?c=${name}`,
      providesTags: ["mealApi"],
    }),

    getDetail: builder.query({
      query: (idMeal) => `/lookup.php?i=${idMeal}`,
      providesTags: ["mealApi"],
    }),
    getSearchedMeal: builder.query({
      query: (searchValue) => `/search.php?s=${searchValue}`,
      providesTags: ["mealApi"],
    }),
    filterMealByCategory: builder.query({
      query: (strCategory) => `/filter.php?c=${strCategory}`,
      providesTags: ["mealApi"],
    }),
  }),
});

export const {
  useGetAllMealsQuery,
  useGetMealCategoryQuery,
  useGetRandomSingleMealQuery,
  useGetDetailQuery,
  useGetSearchedMealQuery,
  useFilterMealByCategoryQuery,
} = mealApi;
