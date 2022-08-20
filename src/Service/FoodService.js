import { getCategories } from "./CategoryService";
import http from "./httpService";
import config from "../config.json";

async function getFoods() {
  const { data: foods } = await http.get(config.apiFoods);
  return foods;
}

async function getFood(id) {
  const { data: foods } = await http.get(config.apiFoods);
  return foods.find((food) => food._id === id);
}

async function saveFood(food) {
  const { data: foods } = await http.get(config.apiFoods);
  let foodInDb = foods.find((f) => f._id === food._id) || {};
  foodInDb.name = food.name;
  const allCategories = await getCategories();
  // console.log(allCategories);
  foodInDb.category = allCategories.find(
    (category) => category._id === food.categoryId
  );
  foodInDb.numberInStock = food.numberInStock;
  foodInDb.price = food.price;

  if (!foodInDb._id) {
    foodInDb._id = Date.now().toString();
    return await http.post("http://localhost:8000/api/foods", foodInDb);
  }

  return await http.put(config.apiFoods + `${foodInDb}`);
}

async function deleteFood(id) {
  const { data: foods } = await http.get(config.apiFoods);
  let foodInDb = foods.find((food) => food._id === id);
  foods.splice(foods.indexOf(foodInDb), 1);
  return foodInDb;
}

export { getFoods, getFood, saveFood, deleteFood };
