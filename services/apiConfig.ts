import axios from "axios";

export const meals = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v2/9973533",
});

export const drinks = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v2/9973533",
});
