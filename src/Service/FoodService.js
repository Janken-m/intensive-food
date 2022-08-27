import http from "./httpService";
import config from "../config.json";

async function getFoods() {
  const { data: foods } = await http.get(config.apiFoods);
  return foods;
}

async function getFood(id) {
  const { data: foodsId } = await http.get(config.apiFoods + `${id}`);
  return foodsId;
}

async function saveFood(food) {
  const foodId = food._id;
  delete food._id;
  //or :
  // const {_id : foodId , ...body } = food
  // if (foodId) return  http.put(config.apiFoods + `${foodId}`, body)

  if (!foodId) return await http.post(config.apiFoods, food);

  return await http.put(config.apiFoods + `${foodId}`, food);
}

function deleteFood(id) {
  return  http.delete(config.apiFoods + `${id}`);
}

export { getFoods, getFood, saveFood, deleteFood };
